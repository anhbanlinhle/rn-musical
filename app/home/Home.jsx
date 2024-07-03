import React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import HomeHeader from "./components/HomeHeader"
import SearchArea from "./components/SearchArea"
import FeedArea from "./components/FeedArea";

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader/>
            <SearchArea/>
            <FeedArea/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Home