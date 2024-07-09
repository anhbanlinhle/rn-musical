import React, {useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import {ratioH} from "../../../utils/converter"

import TrackPlayer, {State, usePlaybackState, useProgress} from 'react-native-track-player'

import Animated, {
    cancelAnimation,
    Easing,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated'
import {useSelector} from "react-redux";
import {backgroundPrimary} from "../../../constants/Colors";
import {selectTheme} from "../../../store/themeSlice";
import SongArtwork from "../../components/SongArtwork";
import SongInfo from "../../components/SongInfo";
import SongDuration from "./SongDuration";
import SongInteractionButtons from "../../components/SongInteractionButtons";

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

    const renderSongInteractionButtons = () => {
        return (
            <SongInteractionButtons
                buttonColor={color}
                isPlaying={playState.state === State.Playing}
                clickPrevious={() => TrackPlayer.seekTo(0)}
                clickPlay={() => changePlayState(playState)}
                clickNext={() => {
                    TrackPlayer.seekTo(track.duration)
                    TrackPlayer.pause()
                }}
                style={styles.songInteractionButtons}
            />
        )
    }
    const renderSongDuration = () => {
        return (
            <SongDuration
                currentPosition={position}
                songDuration={track.duration}
                theme={theme}
                onSlide={value => {
                    TrackPlayer.seekTo(value * track.duration / 100)
                }}
                style={styles.songDuration}
            />
        )
    }

    return (
        <View style={styles.container(theme)}>
            {renderSongArtwork()}
            {renderSongInfo()}
            {renderSongInteractionButtons()}
            {renderSongDuration()}
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
    songDuration: {
        marginTop: ratioH(24),
    },
    songInteractionButtons: {
        marginTop: ratioH(24),
    }
})

export default Content