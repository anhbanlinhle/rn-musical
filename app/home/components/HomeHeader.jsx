import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import Icons from "../../../constants/Icons";
import {ratioH, ratioW} from "../../../utils/converter";
import Fonts from "../../../constants/Fonts";

const HomeHeader = () => {
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

const styles = StyleSheet.create({
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
})

export default HomeHeader