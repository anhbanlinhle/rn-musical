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
import SongArtwork from "../../components/SongArtwork";
import SongInfo from "../../components/SongInfo";

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

    const renderSongArtwork = () => {
        return (
            <SongArtwork
                mainSize={260}
                spinningSize={256}
                imageSize={199}
                color={color}
                img={img}
                sv={sv}
                style={styles.songArtwork}
            />
        )
    }

    const renderSongInfo = () => {
        return (
            <SongInfo
                height={79}
                theme={theme}
                song={song}
                artist={artist}
                mainFontSize={24}
                subFontSize={14}
                style={styles.songInfo}
            />
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
            {renderSongArtwork()}
            {renderSongInfo()}
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
    songArtwork: {
        marginTop: ratioH(24),
    },
    songInfo: {
        marginTop: ratioH(24),
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