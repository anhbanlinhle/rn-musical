import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Button, ScrollView} from 'react-native'
import Banner from "./components/Banner"
import SongList from "./components/SongList"
import Images from "../../constants/Images";
import {useSelector} from "react-redux";
import {backgroundPrimary} from "../../constants/Colors";

const Playlist = ({route}) => {
    const theme = useSelector(state => state.appData.theme)

    let {type} = route.params
    type = JSON.parse(JSON.stringify(type)).type

    return (
        <View style={styles.container(theme)}>
            <ScrollView bounces={false}>
                <Banner type={type}/>
                <SongList type={type}/>
            </ScrollView>
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
})

export default Playlist