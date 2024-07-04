import React, {useState, useEffect, useRef} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, SafeAreaView, Animated, Easing} from 'react-native'
import Icons from "../../constants/Icons"
import Images from "../../constants/Images"
import {ratioH, ratioW, secondsToTime} from "../../utils/converter"
import {useNavigation} from "@react-navigation/native";

const TestScreen = () => {
    let img = "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Save_Your_Tears_Remix_-_The_Weeknd_and_Ariana_Grande.png/220px-Save_Your_Tears_Remix_-_The_Weeknd_and_Ariana_Grande.png"
    let song = "Save Your Tears"
    let artist = "The Weeknd"
    let color = "green"
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

    const spinAnim = useRef(new Animated.Value(0)).current

    const rotation1 = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const rotation2 = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg']
    })

    const spin = useRef(
        Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
                easing: Easing.linear
            })
        )
    ).current

    useEffect(() => {
        if (isPlaying) {
            spin.start()
        }
        else {
            spin.stop()
            spinAnim.setValue(0)
        }
    }, [isPlaying]);

    const renderSongCover = () => {
        return (
            <View style={styles.songCover}>

                    <View style={styles.imageWrapper}>
                        <Animated.View
                            style={[
                                styles.progress(color),
                                {transform: [{rotate: rotation1}] }
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
                                {transform: [{rotate: rotation2}] }
                            ]}
                        >
                            <Image
                                source={{uri: img}}
                                style={styles.image}
                            />
                        </Animated.View>


                    </View>

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
    songCover: {

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

export default TestScreen