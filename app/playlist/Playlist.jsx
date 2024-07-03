import React from 'react'
import {View, StyleSheet, Button, ScrollView} from 'react-native'
import Banner from "./components/Banner"
import SongList from "./components/SongList"

const Playlist = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView bounces={false}>
                <Banner/>
                <SongList/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Playlist