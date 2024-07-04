import {Dimensions} from 'react-native'

export const device_width = Dimensions.get('window').width
export const device_height = Dimensions.get('window').height

export const ratioW = (elementWidth) => {
    // automatically scales to width
    return (elementWidth * device_width) / 375;
}
export const ratioH = (elementWidth) => {
    // automatically scales to height
    return (elementWidth * device_height) / 812;
}

export const secondsToTime = (seconds) => {
    seconds = Math.floor(seconds)
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`
}