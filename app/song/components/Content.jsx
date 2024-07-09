import React, {useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import {ratioH} from "../../../utils/converter"

import TrackPlayer, {State, usePlaybackState, useProgress, RepeatMode} from 'react-native-track-player'

import Animated, {
    cancelAnimation,
    Easing,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated'
import {useDispatch, useSelector} from "react-redux";
import {backgroundPrimary} from "../../../constants/Colors";
import {selectTheme} from "../../../store/themeSlice";
import SongArtwork from "../../components/SongArtwork";
import SongInfo from "../../components/SongInfo";
import SongDuration from "./SongDuration";
import SongInteractionButtons from "../../components/SongInteractionButtons";
import allSongs from "../../../data/songs.json"
import {addPlayingSong, selectArtist, selectImg, selectLink, selectSong, selectType} from "../../../store/songSlice";

const Content = ({color, id}) => {
    const playState = usePlaybackState()
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()
    const img = useSelector(selectImg)
    const song = useSelector(selectSong)
    const artist = useSelector(selectArtist)
    const link = useSelector(selectLink)
    const type = useSelector(selectType)

    const { position, buffered, duration } = useProgress()

    const allTrack = []
    for (let i = 0; i < allSongs.length; i++) {
        allTrack.push({
            url: allSongs[i].link,
            title: allSongs[i].song,
            artist: allSongs[i].artist,
            duration: allSongs[i].duration,
            artwork: allSongs[i].img
        })
    }

    const setup = async () => {
        try {
            await TrackPlayer.setupPlayer()
            await TrackPlayer.add(allTrack)
            await TrackPlayer.setRepeatMode(RepeatMode.Queue)
        }
        catch (e) {
            console.log(e)
        }
        await TrackPlayer.play()
        await TrackPlayer.skip(id, 0)
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
                clickPrevious={() => {
                    TrackPlayer.skipToPrevious(0)
                    TrackPlayer.getActiveTrackIndex().then(index => {

                        dispatch(addPlayingSong({
                            img: allSongs[index].img,
                            song: allSongs[index].song,
                            artist: allSongs[index].artist,
                            link: allSongs[index].link,
                            type: type,
                            id: allSongs[index].id
                        }))
                    })
                }}
                clickPlay={() => {
                    changePlayState(playState)
                }}
                clickNext={() => {
                    TrackPlayer.skipToNext(0)
                    TrackPlayer.getActiveTrackIndex().then(index => {

                        dispatch(addPlayingSong({
                            img: allSongs[index].img,
                            song: allSongs[index].song,
                            artist: allSongs[index].artist,
                            link: allSongs[index].link,
                            type: type,
                            id: allSongs[index].id
                        }))
                    })
                }}
                style={styles.songInteractionButtons}
            />
        )
    }
    const renderSongDuration = () => {
        return (
            <SongDuration
                currentPosition={position || 0}
                songDuration={duration || 0}
                theme={theme}
                onSlide={value => {
                    TrackPlayer.seekTo(value * duration / 100)
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
            {/*{renderSongDuration()}*/}
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
        alignItems: 'center',
    },
    songDuration: {
        marginTop: ratioH(24),
    },
    songInteractionButtons: {
        marginTop: ratioH(24),
    }
})

export default Content