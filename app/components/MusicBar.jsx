import React, {useEffect} from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {ratioH, ratioW} from "../../utils/converter";
import TrackPlayer, {State, usePlaybackState} from "react-native-track-player";
import {cancelAnimation, Easing, useSharedValue, withRepeat, withTiming} from "react-native-reanimated";
import SongArtwork from "./SongArtwork";
import SongInfo from "./SongInfo";
import {backgroundSecondary, shadowColor} from "../../constants/Colors";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {removePlayingSong, selectArtist, selectImg, selectLink, selectSong, selectType} from "../../store/songSlice";
import {selectTheme} from "../../store/themeSlice";
import Icons from "../../constants/Icons";

const MusicBar = () => {
    const navigation = useNavigation()
    const playState = usePlaybackState()
    const spinDuration = 4000
    const easing = Easing.linear
    const color = 'black'

    const theme = useSelector(selectTheme)
    const img = useSelector(selectImg)
    const song = useSelector(selectSong)
    const artist = useSelector(selectArtist)
    const link = useSelector(selectLink)
    const type = useSelector(selectType)

    const dispatch = useDispatch()

    const songInQueue =  img !== '' && song !== '' && artist !== '' && link !== '' && type !== ''

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


    return (
        songInQueue ? (
            <View style={styles.container(theme)}>
                <TouchableOpacity
                    onPress={
                        playState.state === State.Playing
                            ? () => TrackPlayer.pause()
                            : () => TrackPlayer.play()
                    }
                    style={styles.artwork}
                >
                    <SongArtwork
                        mainSize={ratioW(48)}
                        spinningSize={ratioW(44)}
                        imageSize={ratioW(36)}
                        color={color}
                        img={img}
                        sv={sv}
                        style={styles.songArtwork}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Song', {
                        img: img,
                        song: song,
                        artist: artist,
                        link: link,
                        type: type
                    })}
                >
                    <SongInfo
                        song={song}
                        artist={artist}
                        height={72}
                        theme={theme}
                        mainFontSize={ratioW(16)}
                        subFontSize={ratioW(12)}
                        style={styles.songInfo}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => {
                        TrackPlayer.stop()
                        dispatch(removePlayingSong())
                    }}
                >
                    <Icons.Close/>
                </TouchableOpacity>
            </View>
        ) : null
    )
}

const styles = StyleSheet.create({
    container: (theme) => ({
        flex: 1,
        flexDirection: 'row',
        backgroundColor: backgroundSecondary(theme),
        width: ratioW(375 - 16),
        height: ratioW(64),
        position: 'absolute',
        bottom: ratioH(20),
        left: ratioW(8),
        borderRadius: 64,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: ratioH(4),
    }),
    songInfo: {
        alignItems: 'left',
        marginLeft: ratioW(8),
    },
    closeButton: {
        position: 'absolute',
        right: ratioW(24),
    },
})

export default MusicBar