import React from 'react'
import {View, StyleSheet, Button, Text, ImageBackground, SafeAreaView, Image, TouchableHighlight} from 'react-native'

import {ratioH} from "../utils/converter"
import {ratioW} from "../utils/converter"

import Fonts from "../constants/Fonts"

const Onboard = ({navigation}) => {
    const Background = () => {
        return (
            <ImageBackground
                source={require('../assets/images/Onboard-1.png')}
                style={styles.background}
            />
        )
    }

    const Banner = () => {
        return (
            <View style={styles.banner}>
                <View style={styles.bannerAppName}>
                    <Image style={styles.bannerLogo} source={require('../assets/images/AppLogo.png')}/>
                    <Text style={styles.appName}>Musical</Text>
                </View>
                <View style={styles.bannerWelcome}>
                    <Text style={styles.bannerWelcomeText}>Let the music {"\n"}take you away...</Text>
                </View>
            </View>
        )

    }

    const Logo = () => {
        return (
            <View style={styles.foreground}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/Onboard-2.png')}
                />
            </View>
        )
    }

    const HomeButton = () => {
        return (
            <View
                style={styles.nextPageNavigation}
            >
                <TouchableHighlight
                    style={styles.homeButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Image
                        source={require('../assets/images/NextPage.png')}
                        style={styles.homeButtonImage}
                    />
                </TouchableHighlight>

            </View>

        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {Background()}
            {Banner()}
            {Logo()}
            {HomeButton()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24
    },
    background: {
        width: ratioW(376),
        height: ratioW(721),
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: -9999,
        resizeMode: 'contain',
    },
    foreground: {
        width: ratioH(304),
        height: ratioH(438),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: ratioH(314),
        height: ratioH(342),
    },
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
    bannerWelcomeText: {
        ...Fonts.semiBold,
        fontSize: ratioH(32),
        color: '#191D21'
    },
    nextPageNavigation: {
        width: ratioH(304),
        height: ratioH(80),
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: [8, 16, 8, 16]
    },
    homeButton: {
        borderRadius: ratioW(64),
    },
    homeButtonImage: {
        width: ratioH(64),
        height: ratioH(64),
        resizeMode: 'contain',
        zIndex: 9999
    }
})

export default Onboard