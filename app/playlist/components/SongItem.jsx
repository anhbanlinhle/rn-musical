import React from 'react'
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter"

import { useNavigation } from '@react-navigation/native'
import Song from "../../song/Song";
import Fonts from "../../../constants/Fonts"
import Icons from "../../../constants/Icons"

const SongItem = ({img, song, artist}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles().container}
            onPress={() => navigation.navigate(Song)}
        >

            <Image style={styles().cover} source={{uri: img}}/>
            <View style={styles().textWrapper}>
                <Text style={styles().songName}>{song}</Text>
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
    songName: {
        ...Fonts.semiBold,
        color: "#191D21"
    },
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