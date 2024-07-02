import React from 'react'
import {View, StyleSheet, ImageBackground} from 'react-native'
import {ratioW} from "../../../utils/converter"

import Images from "../../../constants/Images"

const Background = () => {
    return (
        <ImageBackground
            source={Images.Onboard1}
            style={styles.background}
        />
    )
}

const styles = StyleSheet.create({
    background: {
        width: ratioW(376),
        height: ratioW(721),
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: -9999,
        resizeMode: 'contain',
    },
})

export default Background