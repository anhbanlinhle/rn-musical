import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import Icons from "../../../constants/Icons"
import {ratioH, ratioW} from "../../../utils/converter"
import Fonts from "../../../constants/Fonts"
import Images from "../../../constants/Images"
import {useNavigation} from "@react-navigation/native";

let User = {
    name: "Linh",
    avatar: Images.Avatar
}

const HomeHeader = () => {
    const navigation = useNavigation()
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
                <Text style={styles.greeting}>Hi,{" "}
                    <Text style={styles.name}>{User.name}</Text>
                </Text>
            </View>
            <Icons.Menu style={styles.dropDown}/>
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
    greeting: {
        ...Fonts.regular,
        fontSize: ratioH(32),
        color: '#191D21'
    },
    name: {
        ...Fonts.semiBold,
        fontSize: ratioH(32),
        color: '#191D21'

    },
    dropDown: {
        width: ratioW(32),
        height: ratioW(32),
    }
})

export default HomeHeader