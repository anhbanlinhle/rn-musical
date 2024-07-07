import React from 'react'
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import {ratioW, ratioH} from "../../../utils/converter"
import Fonts from "../../../constants/Fonts"

import { useNavigation } from '@react-navigation/native'
import {useSelector} from "react-redux";
import {backgroundPrimary, backgroundSecondary, shadowColor, textPrimary} from "../../../constants/Colors";

const AlbumDetail = ({size, img, description, title, type}) => {
    const navigation = useNavigation()
    const theme = useSelector(state => state.appData.theme)

    return (
        <TouchableOpacity
            style={styles({size}).container(theme)}
            onPress={() => {
                navigation.navigate('Playlist', {
                    type: {type}
                })
            }}
        >
                <Image style={styles({size}).cover} source={{uri: img}}/>
                <View style={styles({size}).textWrapper}>
                    <Text style={styles({size}).description(theme)}>{description}</Text>
                    <Text style={styles({size}).title(theme)}>{title}</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = (props) => StyleSheet.create({
    container: (theme) => ({
        flexDirection: 'column',
        backgroundColor: backgroundSecondary(theme),
        borderRadius: 16,
        width: ratioH(props.size) * 254,
        height: ratioH(props.size) * 283,
        shadowColor: shadowColor(theme),
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2.5,
        elevation: 3,
        marginRight: 16,
        marginLeft: 2,
        marginTop: 2
    }),
    cover: {
        width: ratioH(props.size * 254),
        height: ratioH(props.size * 200),
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        resizeMode: 'stretch',
    },
    textWrapper: {
        padding: ratioH(props.size * 16),
    },
    title: (theme) => ({
        ...Fonts.semiBold,
        fontSize: ratioH(props.size * 24),
        color: textPrimary(theme)
    }),
    description: (theme) => ({
        ...Fonts.regular,
        fontSize: ratioH(props.size * 12),
        color: textPrimary(theme)
    })
})

export default AlbumDetail