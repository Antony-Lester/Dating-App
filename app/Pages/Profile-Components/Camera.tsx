import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, ViewStyle, TextStyle } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { page } from '../../styles/pages';
import { setTheme } from '../../styles/theme';
import { CameraIcon } from '../Elements/Icons';


export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert('Picture saved! 🎉');
        setImage(null);
        console.log('saved successfully');
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <View style={page}>
          <View style={card}>
      {!image ? (
        <Camera
          style={cameraMain}
          type={type}
          ref={cameraRef}
          flashMode={flash}
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
                          } } color={undefined}            />
            <Button
                          onPress={() => setFlash(
                              flash === Camera.Constants.FlashMode.off
                                  ? Camera.Constants.FlashMode.on
                                  : Camera.Constants.FlashMode.off
                          )}
                          icon="flash"
                          color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'} title={undefined}            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={card} />
      )}

      <View style={controlsMain}>
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
                          icon="retweet" color={undefined}            />
            <Button title="Save" onPress={savePicture} icon="check" color={undefined} />
          </View>
                  ) : (
                <TouchableOpacity onPress={takePicture} style={buttonStyle}>
                    <CameraIcon/>
                    <Text style={textStyle}>{"Take a picture"}</Text>
                </TouchableOpacity>
          
        )}
      </View>
          </View>
          </View>
  );
}

function Button({ title, onPress, icon, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Entypo name={icon} size={28} color={color ? color : '#f1f1f1'} />
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}


const card: ViewStyle = {
    position: "absolute",
    top: "5%",
    height: "90.0%",
    width: "95%",
    alignSelf: "center",
    borderRadius: 33,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 4,
    borderColor: setTheme.primary,
  };
const buttonStyle: ViewStyle = {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
}
  
const textStyle: TextStyle = {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#f1f1f1',
    marginLeft: 10,
}

const controlsMain = {
      flex: 0.5,
    }
const cameraMain = {
    flex: 5,
    borderRadius: 20,
    }