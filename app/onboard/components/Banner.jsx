import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import {ratioH} from "../../../utils/converter"
import Fonts from "../../../constants/Fonts"

import Images from "../../../constants/Images"
import {useSelector} from "react-redux";
import {textPrimary} from "../../../constants/Colors";
import {selectTheme} from "../../../store/themeSlice";

const Banner = () => {
    const theme = useSelector(selectTheme).theme

    return (
        <View style={styles.banner}>
            <View style={styles.bannerAppName}>
                <Image style={styles.bannerLogo} source={Images.AppLogo}/>
                <Text style={styles.appName}>Musical</Text>
            </View>
            <View style={styles.bannerWelcome}>
                <Text style={styles.bannerWelcomeText(theme)}>Let the music {"\n"}take you away...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        marginTop: ratioH(44),
        width: ratioH(304),
        height: ratioH(154),
        alignItems: 'left',
        justifyContent: 'top',
        gap: 8
    },
    bannerLogo: {
        width: ratioH(32),
        height: ratioH(32),
    },
    bannerAppName: {
        flexDirection: 'row',
        alignItems: 'left',
        gap: 4
    },
    appName: {
        ...Fonts.semiBold,
        fontSize: ratioH(20),
        color: '#B9C8FF'
    },
    bannerWelcome: {
        alignItems: 'left',
        justifyContent: 'center',
    },
    bannerWelcomeText: (theme) => ({
        ...Fonts.semiBold,
        fontSize: ratioH(32),
        color: textPrimary(theme)
    }),
})

export default Banner