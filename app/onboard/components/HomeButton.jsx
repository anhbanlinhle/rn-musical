import React from 'react'
import {View, StyleSheet, TouchableHighlight, Image} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter"
import Images from "../../../constants/Images"
import {useNavigation} from "@react-navigation/native";

const HomeButton = () => {
    const navigation = useNavigation()

    return (
        <View
            style={styles.nextPageNavigation}
        >
            <TouchableHighlight
                style={styles.homeButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Image
                    source={Images.NextPage}
                    style={styles.homeButtonImage}
                />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    nextPageNavigation: {
        width: ratioH(304),
        height: ratioH(80),
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: [8, 16, 8, 16]
    },
    homeButton: {
        borderRadius: ratioW(64),
    },
    homeButtonImage: {
        width: ratioH(64),
        height: ratioH(64),
        resizeMode: 'contain',
        zIndex: 9999
    }
})

export default HomeButton