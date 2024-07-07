import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Fonts from "../../../constants/Fonts";
import {ratioH, ratioW} from "../../../utils/converter";
import Icons from "../../../constants/Icons";
import {useSelector} from "react-redux";
import {searchArea, textPrimary} from "../../../constants/Colors";

const SearchArea = () => {
    const theme = useSelector(state => state.appData.theme)

    return (
        <View style={styles.container(theme)}>
            <Icons.Search style={styles.searchIcon} fill={textPrimary(theme)}/>
            <Text style={styles.searchText(theme)}>Search music</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (theme) => ({
        flexDirection: 'row',
        width: ratioW(327),
        height: ratioW(46),
        backgroundColor: searchArea(theme),
        borderRadius: ratioW(10),
    }),
    searchIcon: {
        width: ratioW(24),
        height: ratioW(24),
        margin: ratioW(11),
    },
    searchText: (theme) => ({
        ...Fonts.regular,
        fontSize: ratioW(16),
        marginVertical: ratioW(11),
        color: textPrimary(theme)
    }),
})

export default SearchArea