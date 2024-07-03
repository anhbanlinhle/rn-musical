import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import Icons from "../../../constants/Icons";
import {ratioH, ratioW} from "../../../utils/converter";
import {useNavigation} from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icons.Back style={styles.iconBack}/>
            </TouchableOpacity>
            <Icons.Download style={styles.iconDownload}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: ratioH(16),
        marginHorizontal: ratioW(26),
        width: ratioW(323),
        height: ratioW(40),
        alignItems: 'center',
        backgroundColor: "#A6B9FF",
    },
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