import React, {useEffect} from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import HomeHeader from "./components/HomeHeader"
import SearchArea from "./components/SearchArea"
import FeedArea from "./components/FeedArea"
import {ratioH, ratioW} from "../../utils/converter"
import {useSelector} from "react-redux"
import {backgroundPrimary} from "../../constants/Colors"
import {selectTheme} from "../../store/themeSlice";
import MusicBar from "../components/MusicBar";
import {selectArtist, selectId, selectImg, selectLink, selectSong, selectType} from "../../store/songSlice";

const Home = () => {
    const theme = useSelector(selectTheme)

    let playing = useSelector(selectImg) !== ''

    return (
        <SafeAreaView style={styles.wrapper(theme)}>
            <View style={styles.container(theme)}>
                <HomeHeader/>
                <SearchArea/>
                <FeedArea/>
                <View style={styles.footer(playing)}/>
            </View>
            <MusicBar/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: (theme) => ({
        flex: 1,
        backgroundColor: backgroundPrimary(theme),
    }),
    container: (theme) => ({
        flex: 1,
        backgroundColor: backgroundPrimary(theme),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ratioH(121),
        gap: ratioW(16)
    }),
    footer: (playing) => ({
        height: playing ? ratioH(128) : 0
    })
})

export default Home