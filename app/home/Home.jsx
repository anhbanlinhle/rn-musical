import React from 'react'
import {View, StyleSheet, Button, Text, ScrollView, Image, SafeAreaView} from 'react-native'

import {ratioH} from "../../utils/converter"
import {ratioW} from "../../utils/converter"

import Fonts from "../../constants/Fonts"
import Icons from "../../constants/Icons";

const Home = ({navigation}) => {
    const Header = () => {
        return (
            <View style={styles.homeHeader}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/images/Avatar.png')}
                />
                <Text style={styles.greeting}>Hi,{" "}
                    <Text style={styles.name}>User</Text>
                </Text>
                <Icons.Menu/>
            </View>
        )
    }

    const SearchBar = () => {
        return (
            <View style={styles.searchBar}>
                <Text style={styles.searchText}>Search music</Text>
            </View>
        )
    }

    const FeedArea = () => {
        return (
            <ScrollView style={styles.feedArea}>
                {PopularSection()}
                {TopAlbumSection()}
            </ScrollView>
        )
    }

    const PopularSection = () => {
        return (
            <ScrollView
                horizontal={true}
                style={styles.popularSection}
            >
                <Text style={styles.popularText}>Popular</Text>
            </ScrollView>
        )
    }

    const TopAlbumSection = () => {
        return (
            <ScrollView
                horizontal={true}
                style={styles.topAlbumSection}
            >
                <Text style={styles.topAlbumText}>Top Albums</Text>
            </ScrollView>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            {Header()}
            {SearchBar()}
            {FeedArea()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeHeader: {
        flexDirection: 'row',
        width: ratioW(327),
        height: ratioH(41),
        gap: 4
    },
    avatar: {
        width: ratioW(32),
        height: ratioH(32),
    },
    greeting: {
        ...Fonts.regular,
        fontSize: ratioW(32),
    },
    name: {
        ...Fonts.semiBold,
        fontSize: ratioW(32),
    },
    searchText: {
        ...Fonts.regular,
    },


})

export default Home