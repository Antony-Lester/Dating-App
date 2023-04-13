/** @format */
import encode from "../../utils/blurhash"

function LOG_PICTURE_ACTION(state: any, action: any) {
    console.log('ACTION 1', action.payload.uri.slice(7))
    let pixels = new Uint8ClampedArray()
    const width = action.payload.width;
    const height = action.payload.height;
    const componentX = 9
    const componentY = 16


    //const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });

    console.log('ACTION 2')
    const image = new Image();
    console.log('ACTION 3', action.payload.uri.slice(7))
    image.src = action.payload.uri /* Blob URL, "/path/to/image/served/with/cors/headers" */;
    image.onload = (data) => {
        
        console.log('data', data);
    }
    console.log('blurhash', encode(pixels, width, height, componentX, componentY))
    return {
        ...state, user: {
            ...state.user,
            imageUrl: action.payload.uri,
            imageBlurhash: encode(pixels, width, height, componentX, componentY)
        }
    }
}

export default LOG_PICTURE_ACTION