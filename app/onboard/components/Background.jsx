import React from 'react'
import {View, StyleSheet, ImageBackground} from 'react-native'
import {ratioW} from "../../../utils/converter"

const Background = () => {
    return (
        <ImageBackground
            source={require('../../../assets/images/Onboard-1.png')}
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