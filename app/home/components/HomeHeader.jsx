import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import Icons from "../../../constants/Icons"
import {ratioH, ratioW} from "../../../utils/converter"
import Fonts from "../../../constants/Fonts"
import Images from "../../../constants/Images"

let User = {
    name: "Linh",
    avatar: Images.Avatar
}

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={User.avatar}
            />
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
        fontSize: ratioW(32),
    },
    name: {
        ...Fonts.semiBold,
        fontSize: ratioH(32),
    },
    dropDown: {
        width: ratioW(32),
        height: ratioW(32),
    }
})

export default HomeHeader