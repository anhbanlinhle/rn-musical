import React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import HomeHeader from "./components/HomeHeader"
import SearchArea from "./components/SearchArea"
import FeedArea from "./components/FeedArea"
import {ratioH, ratioW} from "../../utils/converter"

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <HomeHeader/>
                <SearchArea/>
                <FeedArea/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ratioH(121),
        padding: [ratioW(0), ratioW(24), ratioW(0), ratioW(24)],
        gap: ratioW(32)
    }
})

export default Home