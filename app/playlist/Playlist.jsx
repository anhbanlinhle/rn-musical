import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Button, ScrollView} from 'react-native'
import Banner from "./components/Banner"
import SongList from "./components/SongList"
import Images from "../../constants/Images";
import {useSelector} from "react-redux";
import {backgroundPrimary} from "../../constants/Colors";
import {selectTheme} from "../../store/themeSlice";
import MusicBar from "../components/MusicBar";
import {selectImg} from "../../store/songSlice";
import {ratioH} from "../../utils/converter";

const Playlist = ({route}) => {
    const theme = useSelector(selectTheme)

    let {type, index} = route.params

    let playing = useSelector(selectImg) !== ''

    return (
        <View style={styles.container(theme)}>
            <ScrollView bounces={false}>
                <Banner type={type} index={index}/>
                <SongList type={type} index={index}/>
                <View style={styles.footer(playing)}/>
            </ScrollView>
            <MusicBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (theme) => ({
        flex: 1,
        backgroundColor: backgroundPrimary(theme),
        alignItems: 'center',
        justifyContent: 'center',
    }),
    footer: (playing) => ({
        height: playing ? ratioH(80) : 0
    })
})

export default Playlist