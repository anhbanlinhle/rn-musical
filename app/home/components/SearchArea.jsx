import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Fonts from "../../../constants/Fonts";

const SearchArea = () => {
    return (
        <View style={styles.searchBar}>
            <Text style={styles.searchText}>Search music</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {

    },
    searchText: {
        ...Fonts.regular,
    },
})

export default SearchArea