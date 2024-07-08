import React from 'react'
import {View, StyleSheet, ImageBackground} from 'react-native'
import {ratioW} from "../../../utils/converter"

import Images from "../../../constants/Images"
import {useSelector} from "react-redux";
import {backgroundPrimary, backgroundSecondary} from "../../../constants/Colors";
import {selectTheme} from "../../../store/themeSlice";

const Background = () => {
    const theme = useSelector(selectTheme).theme

    return (
        <ImageBackground
            source={Images.Onboard1}
            style={styles.background}
            imageStyle={{
                tintColor: backgroundSecondary(theme)
            }}
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
        resizeMode: 'contain'
    },
})

export default Background