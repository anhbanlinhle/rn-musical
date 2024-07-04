import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Button, ScrollView} from 'react-native'
import Banner from "./components/Banner"
import SongList from "./components/SongList"
import Images from "../../constants/Images";

const Playlist = ({route}) => {
    let {type} = route.params
    type = JSON.parse(JSON.stringify(type)).type

    return (
        <View style={styles.container}>
            <ScrollView bounces={false}>
                <Banner type={type}/>
                <SongList type={type}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Playlist