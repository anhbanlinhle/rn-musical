import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {ratioH} from "../../utils/converter";
import Fonts from "../../constants/Fonts";
import {textPrimary, textSecondary} from "../../constants/Colors";

const SongInfo = ({height, theme, song, artist, mainFontSize, subFontSize}) => {
    return (
        <View style={styles.songWrapper(height)}>
            <Text style={styles.songName(theme, mainFontSize)}>{song}</Text>
            <Text style={styles.songArtist(theme, subFontSize)}>{artist}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    songWrapper: (height) => ({
        marginTop: ratioH(24),
        alignItems: 'center',
        justifyContent: 'center',
        height: ratioH(height),
        backgroundColor: 'red',
    }),
    songName: (theme, mainFontSize) => ({
        ...Fonts.semiBold,
        color: textPrimary(theme),
        fontSize: ratioH(mainFontSize),
    }),
    songArtist: (theme, subFontSize) => ({
        ...Fonts.regular,
        color: textSecondary(theme),
        fontSize: ratioH(subFontSize),
        marginTop: ratioH(4),
    }),
})

export default SongInfo