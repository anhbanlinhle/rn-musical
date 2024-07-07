import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import Icons from "../../../constants/Icons"
import {ratioH, ratioW} from "../../../utils/converter"
import Fonts from "../../../constants/Fonts"
import Images from "../../../constants/Images"
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {textPrimary} from "../../../constants/Colors";

let User = {
    name: "Linh",
    avatar: Images.Avatar
}

const HomeHeader = () => {
    const navigation = useNavigation()

    const theme = useSelector(state => state.appData.theme)

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Image
                    style={styles.avatar}
                    source={User.avatar}
                />
            </TouchableOpacity>
            <View style={styles.message}>
                <Text style={styles.greeting(theme)}>Hi,{" "}
                    <Text style={styles.name(theme)}>{User.name}</Text>
                </Text>
            </View>
            <Icons.Menu style={styles.dropDown} fill={textPrimary(theme)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: ratioW(327),
        height: ratioW(41),
        gap: 4
    },
    avatar: {
        width: ratioW(32),
        height: ratioW(32),
    },
    message: {
        width: ratioW(231),
        height: ratioW(41),
        marginHorizontal: ratioH(16),
    },
    greeting: (theme) => ({
        ...Fonts.regular,
        fontSize: ratioH(32),
        color: textPrimary(theme)
    }),
    name: (theme) => ({
        ...Fonts.semiBold,
        fontSize: ratioH(32),
        color: textPrimary(theme)
    }),
    dropDown: {
        width: ratioW(32),
        height: ratioW(32),
    }
})

export default HomeHeader