import React from 'react'
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter"

import { useNavigation } from '@react-navigation/native'
import Fonts from "../../../constants/Fonts"
import Icons from "../../../constants/Icons"
import {useDispatch, useSelector} from "react-redux";
import {textPrimary} from "../../../constants/Colors";
import {selectTheme} from "../../../store/themeSlice";
import {addPlayingSong} from "../../../store/songSlice";
import TrackPlayer, {State, usePlaybackState} from "react-native-track-player";

const SongItem = ({img, song, artist, link, type, id}) => {
    const theme = useSelector(selectTheme)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const playState = usePlaybackState()

    return (
        <TouchableOpacity
            style={styles().container}
            onPress={() => {
                dispatch(addPlayingSong({img, song, artist, link, type, id}))
                if (playState.state === State.Playing)
                    TrackPlayer.stop()
                navigation.navigate('Song', {
                        // img: img,
                        // song: song,
                        // artist: artist,
                        // link: link,
                        // type: type,
                        id: id
                    })
            }}
        >
            <Image style={styles().cover} source={{uri: img}}/>
            <View style={styles().textWrapper}>
                <Text style={styles().songName(theme)}>{song}</Text>
                <Text style={styles().songArtist}>{artist}</Text>
            </View>
            <Icons.Detail style={styles().detail}/>
        </TouchableOpacity>
    )
}

const styles = (props) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: ratioW(45),
        alignItems: 'center',
        width: ratioW(285),
        marginBottom: ratioH(28)
    },
    cover: {
        width: ratioW(68),
        height: ratioW(68),
        borderRadius: 8,
        resizeMode: 'stretch',
    },
    textWrapper: {
        marginLeft: ratioW(15)
    },
    songName: (theme) => ({
        ...Fonts.semiBold,
        color: textPrimary(theme),
    }),
    songArtist: {
        ...Fonts.regular,
        color: "#ACB8C2"
    },
    detail: {
        position: 'absolute',
        right: 0
    }
})

export default SongItem