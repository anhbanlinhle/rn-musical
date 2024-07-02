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