import React, {useState, useEffect, useRef} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import Icons from "../../constants/Icons"
import Images from "../../constants/Images"
import {ratioH, ratioW, secondsToTime} from "../../utils/converter"
import {useNavigation} from "@react-navigation/native"
import Animated, {
    cancelAnimation,
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated'

const duration = 3000
const easing = Easing.linear

const TestScreen2 = () => {
    let img = "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Save_Your_Tears_Remix_-_The_Weeknd_and_Ariana_Grande.png/220px-Save_Your_Tears_Remix_-_The_Weeknd_and_Ariana_Grande.png"
    let song = "Save Your Tears"
    let artist = "The Weeknd"
    let color = "red"
    const navigation = useNavigation()
    const [isPlaying, setIsPlaying] = useState(false)

    const renderHeader = () => {
        return (
            <View style={styles.header(color)}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icons.Back style={styles.iconBack}/>
                </TouchableOpacity>
            </View>
        )
    }
    useEffect(() => {
        if (isPlaying) {
            sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
        }
        else {
            cancelAnimation(sv)
            sv.value = 0
        }
    }, [isPlaying]);

    const sv = useSharedValue(0)

    const spin1 = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * 360}deg` }],
    }))
    const spin2 = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * -360}deg` }],
    }))

    const renderSongCover = () => {
        return (
            <View style={styles.imageWrapper}>
                <Animated.View
                    style={[
                        styles.progress(color),
                        spin1
                    ]}
                >
                    <Image
                        source={Images.Progress}
                        style={styles.circle(color)}
                    />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.image,
                        spin2
                    ]}
                >
                    <Image
                        source={{uri: img}}
                    />
                </Animated.View>
            </View>
        )
    }

    const renderInteractionButton = () => {
        return (
            <View style={styles.interactionButton}>

                <TouchableOpacity
                    style={styles.playButton(color)}
                    onPress={() => {
                        setIsPlaying(!isPlaying)
                    }}
                >
                    {isPlaying ? <Icons.Pause/> : <Icons.Play/>}
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderSongCover()}
            {renderInteractionButton()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        alignItems: 'center',
    },
    header: (bannerColor) => ({
        flexDirection: 'row',
        width: ratioW(323),
        height: ratioW(64),
        alignItems: 'center',
        // backgroundColor: bannerColor,
    }),
    iconBack: {
        width: ratioH(64),
        height: ratioH(64),
    },
    imageWrapper: {
        // marginTop: ratioH(48),
        justifyContent: 'center',
        alignItems: 'center',
        width: ratioW(231),
        height: ratioW(231),
        // backgroundColor: 'black',
    },
    progress: (color) => ({
        width: ratioW(231),
        height: ratioW(231),
        position: 'absolute',
        top: 0,
        resizeMode: 'contain',
    }),
    circle: (color) => ({
        tintColor: color
    }),
    image: {
        width: ratioW(199),
        height: ratioW(199),
        borderRadius: ratioW(199),
    },
    interactionButton: {
        marginTop: ratioH(24),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: ratioW(375),
        height: ratioH(80),
    },
    playButton: (color) => ({
        width: ratioW(80),
        height: ratioW(80),
        borderRadius: ratioW(80),
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: ratioW(24),
        marginTop: ratioH(128)
    })
})

export default TestScreen2