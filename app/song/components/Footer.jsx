import React, {useEffect, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import Icons from "../../../constants/Icons";
import Images from "../../../constants/Images";

const Footer = ({color}) => {

    return (
        <View style={styles.container(color)}>
            <View style={styles.iconWrapper}>
                <Icons.HeartFilled style={styles.iconHeart}/>
            </View>
            <View style={styles.iconWrapper}>
                <Icons.Playlist style={styles.iconPlaylist}/>
            </View>
            <View style={styles.iconWrapper}>
                <Icons.Shuffle style={styles.iconShuffle}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (bannerColor) => ({
        flex: 1,
        backgroundColor: bannerColor,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        width: ratioW(375),
        height: ratioH(96),
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: ratioH(32),
    }),
    iconWrapper: {
        width: ratioW(99),
        height: ratioW(64),
    },
    iconHeart: {
        width: ratioW(32),
        height: ratioW(32),
        position: 'absolute',
        left: 0,
        marginHorizontal: ratioW(8),
    },
    iconPlaylist: {
        width: ratioW(32),
        height: ratioW(32),
        position: 'absolute',
        right: ratioW(32),
    },
    iconShuffle: {
        width: ratioW(32),
        height: ratioW(32),
        position: 'absolute',
        right: 0,
        marginHorizontal: ratioW(8),
    },
})

export default Footer