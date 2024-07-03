import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Fonts from "../../../constants/Fonts";
import {ratioH, ratioW} from "../../../utils/converter";
import Icons from "../../../constants/Icons";

const SearchArea = () => {
    return (
        <View style={styles.container}>
            <Icons.Search style={styles.searchIcon}/>
            <Text style={styles.searchText}>Search music</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: ratioW(327),
        height: ratioW(46),
        gap: 4,
        backgroundColor: '#E8EEF3',
        borderRadius: ratioW(10),
    },
    searchIcon: {
        width: ratioW(24),
        height: ratioW(24),
        margin: ratioW(11),
    },
    searchText: {
        ...Fonts.regular,
        fontSize: ratioW(16),
        marginVertical: ratioW(11),
    },
})

export default SearchArea