import React, {useEffect, useState} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import Icons from "../../../constants/Icons";
import {ratioH, ratioW} from "../../../utils/converter";
import {useNavigation} from "@react-navigation/native";

const Header = ({color}) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container(color)}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icons.Back style={styles.iconBack}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconDownload}
                onPress={() => navigation.navigate("TestScreen")}
            >
                <Icons.Download style={styles.iconBack}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (bannerColor) => ({
        flexDirection: 'row',
        marginVertical: ratioH(16),
        marginHorizontal: ratioW(26),
        width: ratioW(323),
        height: ratioW(40),
        alignItems: 'center',
        backgroundColor: bannerColor,
    }),
    iconBack: {
        width: ratioH(32),
        height: ratioH(32),
    },
    iconDownload: {
        width: ratioH(32),
        height: ratioH(32),
        position: 'absolute',
        right: 0
    },
})

export default Header