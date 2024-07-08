import React, {useEffect} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import Icons from "../../../constants/Icons"
import Images from "../../../constants/Images"
import {ratioH, ratioW, secondsToTime} from "../../../utils/converter"
import Fonts from "../../../constants/Fonts"
import { Slider } from '@react-native-assets/slider'

import TrackPlayer, {State, usePlaybackState, useProgress} from 'react-native-track-player'

import Animated, {
    cancelAnimation,
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated'
import {useSelector} from "react-redux";
import {backgroundPrimary, textPrimary, textSecondary} from "../../../constants/Colors";
import {selectTheme} from "../../../store/themeSlice";

const Content = ({img, song, artist, link, color}) => {
    const playState = usePlaybackState()
    const theme = useSelector(selectTheme)

    const { position, buffered, duration } = useProgress()

    const track = {
        url: link,
        title: song,
        artist: artist,
        duration: 127
    }

    const setup = async () => {
        try {
            await TrackPlayer.setupPlayer()
            await TrackPlayer.add(track)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        setup().then(() => {})
    }, [])

    const changePlayState = async playState => {
        try {
            if (playState.state === State.Playing) {
                await TrackPlayer.pause()
            }
            else {
                await TrackPlayer.play()
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    const spinDuration = 4000
    const easing = Easing.linear

    const sv = useSharedValue(0)

    const spin1 = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * 360}deg` }],
    }))
    const spin2 = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * -360}deg` }],
    }))

    useEffect(() => {
        if (playState.state === State.Playing) {
            sv.value = withRepeat(withTiming(1, { duration: spinDuration, easing }), -1);
        }
        else {
            cancelAnimation(sv)
            sv.value = 0
        }
    }, [playState.state]);

    const renderSongCover = () => {
        return (
            <View style={styles.imageWrapper}>
                <Animated.View
                    style={[
                        styles.progressWrapper(color),
                        spin1
                    ]}
                >
                    <Image
                        source={Images.Progress}
                        style={styles.progress(color)}
                    />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.artworkWrapper,
                        spin2
                    ]}
                >
                    <Image
                        source={{uri: img}}
                        style={[styles.artwork]}
                    />
                </Animated.View>
                </View>
        )
    }

    const renderSongName = () => {
        return (
            <View style={styles.songWrapper}>
                <Text style={styles.songName(theme)}>{song}</Text>
                <Text style={styles.songArtist(theme)}>{artist}</Text>
            </View>
        )
    }

    const renderInteractionButton = () => {
        return (
            <View style={styles.interactionButton}>
                <TouchableOpacity
                    onPress={() => TrackPlayer.seekTo(0)}
                    hitSlop={
                        {
                            top: ratioH(40),
                            left: ratioH(80),
                            bottom: ratioH(40),
                            right: 0
                        }
                    }
                >
                    <Icons.Previous/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.playButton(color)}
                    onPress={() => changePlayState(playState)}
                >
                    {playState.state === State.Playing ? <Icons.Pause/> : <Icons.Play/>}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        TrackPlayer.seekTo(track.duration)
                        TrackPlayer.pause()
                    }
                }
                    hitSlop={
                        {
                            top: ratioH(40),
                            left: 0,
                            bottom: ratioH(40),
                            right: ratioH(80)
                        }
                    }
                >
                    <Icons.Next/>
                </TouchableOpacity>
            </View>
        )
    }

    const renderDuration = () => {
        return (
            <View style={styles.duration}>
                <Text style={styles.time(theme)}>{secondsToTime(position)}</Text>
                <Slider
                    value={position/track.duration * 100}
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    step={0}
                    minimumTrackTintColor="#393939"
                    maximumTrackTintColor="#CDD9E3"
                    thumbTintColor="#393939"
                    thumbSize={ratioW(16)}
                    trackHeight={ratioH(6)}
                    onValueChange={value => {
                        TrackPlayer.seekTo(value * track.duration / 100)
                    }}
                />
                <Text style={styles.time(theme)}>{secondsToTime(track.duration)}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container(theme)}>
            {renderSongCover()}
            {renderSongName()}
            {renderInteractionButton()}
            {renderDuration()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: (theme) => ({
        flex: 1,
        backgroundColor: backgroundPrimary(theme),
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        alignItems: 'center',
    }),
    songCover: {

    },
    imageWrapper: {
        marginTop: ratioH(24),
        justifyContent: 'center',
        alignItems: 'center',
        width: ratioW(260),
        height: ratioW(260),
        // backgroundColor: 'green',
    },
    progressWrapper: (color) => ({
        position: 'absolute',
    }),
    progress: (color) => ({
        width: ratioW(256),
        height: ratioW(256),
        tintColor: color,
    }),
    artworkWrapper: {
        position: 'absolute'
    },
    artwork: {
        width: ratioW(199),
        height: ratioW(199),
        borderRadius: ratioW(199),
    },
    songWrapper: {
        marginTop: ratioH(24),
        alignItems: 'center',
        justifyContent: 'center',
        height: ratioH(79),
    },
    songName: (theme) => ({
        ...Fonts.semiBold,
        color: textPrimary(theme),
        fontSize: ratioH(24),
    }),
    songArtist: (theme) => ({
        ...Fonts.regular,
        color: textSecondary(theme),
        fontSize: ratioH(14),
        marginTop: ratioH(4),
    }),
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
    }),
    duration: {
        marginTop: ratioH(24),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: ratioW(375),
        height: ratioH(48),
    },
    slider: {
        width: ratioW(207),
        height: ratioH(16),
        marginHorizontal: ratioW(8),
        marginVertical: ratioH(16),
    },
    time: (theme) => ({
        ...Fonts.regular,
        color: textSecondary(theme),
        fontSize: ratioH(12),
        marginHorizontal: ratioW(8),
        marginVertical: ratioH(16),
    })
})

export default Content