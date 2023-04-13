import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
import { manipulateAsync, SaveFormat} from 'expo-image-manipulator';
import { Entypo } from '@expo/vector-icons';
import Splash from '../Components/Splash';
import * as FileSystem from 'expo-file-system';
import { FileInterface } from '../../utils/interfaces';
import * as FaceDetector from 'expo-face-detector';


export default function () {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [imageData, setImageData] = useState<Object | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      //MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
        setImageData(data)
      } catch (error) {
        console.error('TAKE PIC ERROR:', error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      //loading screen
      setLoading(true)

      //resize & best file format
      //aspect ratio 2:3 0.667 1,080 x 1,620 or 810 x 1215 (40% less) or 540 x 810 (72% less)
      const height = 1215
      const width = Math.round(height * 0.667)
      const formatToPng = () : Promise<FileInterface> => {
        return new Promise(() => {
          manipulateAsync(image, [{ resize: { height, width } }], { compress: 1, format: SaveFormat.PNG, base64: true })
            .then((result) => { FileSystem.getInfoAsync(result.uri).then((tmp: any) => {return{ ...result, ...tmp }})})});};
      const formatToJpg = () : Promise<FileInterface> => {
        return new Promise(() => {
          manipulateAsync(image, [{ resize: { height, width } }], { compress: 1, format: SaveFormat.JPEG, base64: true })
            .then((result) => { FileSystem.getInfoAsync(result.uri).then((tmp: any) => {return{ ...result, ...tmp }})})});};
      const files: Array<FileInterface> = await Promise.all([formatToPng(), formatToJpg()])
      const { base64, modificationTime: timeStamp, uri} : FileInterface = files.reduce((a, b) => a?.size < b?.size ? a : b)
      setImage(uri)
      //face detection https://docs.expo.dev/versions/latest/sdk/facedetector/
      const faceResults = await FaceDetector.detectFacesAsync(uri, {
        mode: FaceDetector.FaceDetectorMode.accurate,
        detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
        runClassifications: FaceDetector.FaceDetectorClassifications.all,
        minDetectionInterval: 500,
        tracking: true,
      })
      console.log('Face Check', faceResults)
      //other detection

      //calculate blurhash,

      //console.log('blurhash', encode(getImageData(image), width, height, )) //componentX, componentY
      
      //rename file? as uid
      //send to server.. image, time, blurhash
      setTimeout(()=>setLoading(false),9000)
    }
  };


  const handleFacesDetected = async ({ faces }) => { 
    if (faces.length === 1) {console.log('handleFacesDetected', JSON.stringify(faces[0],null,4))}
    if (faces.length > 1) { console.log('handleFacesDetected more then one face')}
    /*
    {
        "smilingProbability": 0.6865074038505554,
        "leftEyeOpenProbability": 0.05671572685241699,
        "rollAngle": 357.0671844482422,
        "bounds": {
            "size": {
                "width": 163.7733333333333,
                "height": 184.34892857142856
            },
            "origin": {
                "y": 151.03285714285713,
                "x": 125.87809523809523
            }
        },
        "rightEyeOpenProbability": 0.6528555154800415,
        "yawAngle": 27.94872283935547,
        "faceID": 8
    }

    {
    "smilingProbability": 0.9158288240432739,
    "leftEyeOpenProbability": 0.651045560836792,
    "rollAngle": 346.8492383956909,
    "bounds": {
        "size": {
            "width": 261.64190476190475,
            "height": 294.2919642857143
        },
        "origin": {
            "y": 136.22571428571428,
            "x": 44.485714285714266
        }
    },
    "rightEyeOpenProbability": 0.22126847505569458,
    "yawAngle": 335.6667194366455,
    "faceID": 26
  }
    */
  }; 


  if (!hasCameraPermission) {return <Text>No access to camera</Text>;}
  if (loading) {return <Splash/>}
    return (
      <View style={styles.container}>
        {!image ? (
          <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef}
            flashMode={flash}
            //face detector
            onFacesDetected={handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.fast,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
              minDetectionInterval: 1000,
              tracking: true,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 30,
              }}
            >
              <Button
                title=""
                icon="retweet"
                onPress={() => {
                  setType(
                    type === CameraType.back ? CameraType.front : CameraType.back
                  );
                }}
              />
              <Button
                onPress={() =>
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  )
                }
                icon="flash"
                color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'}
              />
            </View>
          </Camera>
        ) : (
          <Image source={{ uri: image }} style={styles.camera} />
        )}

        <View style={styles.controls}>
          {image ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 50,
              }}
            >
              <Button
                title="Re-take"
                onPress={() => setImage(null)}
                icon="retweet"
              />
              <Button title="Save" onPress={savePicture} icon="check" />
            </View>
          ) : (
            <Button title="Take a picture" onPress={takePicture} icon="camera" />
          )}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E9730F',
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  topControls: {
    flex: 1,
  },
});

function Button({ title, onPress, icon, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={but.button}>
      <Entypo name={icon} size={28} color={color ? color : '#f1f1f1'} />
      <Text style={but.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const but = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#f1f1f1',
    marginLeft: 10,
  },
});




/*try {
        const asset = await MediaLibrary.createAssetAsync(image);
        const assetData = await MediaLibrary.getAssetInfoAsync(asset)
         
        {"albumId": "-2075821635", "creationTime": 0, "duration": 0, "filename": "bf39c1a0-f347-4179-8b64-5a4a59b14a40.jpg", "height": 2614, "id": "1000000022", "mediaType": "photo", "modificationTime": 1680199520000, "uri": "file:///storage/emulated/0/DCIM/bf39c1a0-f347-4179-8b64-5a4a59b14a40.jpg", "width": 1384}
        
        store.dispatch({ type: LOG_PICTURE, payload: imageData })
        setImage(null);
        alert('Picture saved! 🎉');
      } catch (error) {
        console.error(error);
      }*/