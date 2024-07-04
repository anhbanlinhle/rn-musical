import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import Icons from "../../../constants/Icons"
import Images from "../../../constants/Images"
import {ratioH, ratioW, secondsToTime} from "../../../utils/converter"
import Fonts from "../../../constants/Fonts"
import { Slider } from '@react-native-assets/slider'

import TrackPlayer, {State, usePlaybackState, useProgress} from 'react-native-track-player'

const Content = ({img, song, artist, link, color}) => {
    const playState = usePlaybackState()
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

    const renderSongCover = () => {
        return (
            <View style={styles.songCover}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={Images.Progress}
                        style={styles.progress(color)}
                    />
                    <Image
                        source={{uri: img}}
                        style={styles.image}
                    />
                </View>
            </View>
        )
    }

    const renderSongName = () => {
        return (
            <View style={styles.songWrapper}>
                <Text style={styles.songName}>{song}</Text>
                <Text style={styles.songArtist}>{artist}</Text>
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
                <Text style={styles.time}>{secondsToTime(position)}</Text>
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
                <Text style={styles.time}>{secondsToTime(track.duration)}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderSongCover()}
            {renderSongName()}
            {renderInteractionButton()}
            {renderDuration()}
        </View>
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
    songCover: {

    },
    imageWrapper: {
        marginTop: ratioH(48),
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
        tintColor: color
    }),
    image: {
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
    songName: {
        ...Fonts.semiBold,
        color: '#191D21',
        fontSize: ratioH(24),
    },
    songArtist: {
        ...Fonts.regular,
        color: '#656F77',
        fontSize: ratioH(14),
        marginTop: ratioH(4),
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
    time: {
        ...Fonts.regular,
        color: '#656F77',
        fontSize: ratioH(12),
        marginHorizontal: ratioW(8),
        marginVertical: ratioH(16),
    }
})

export default Content