import React from 'react'
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native'
import {ratioW, ratioH} from "../../../utils/converter";
import Fonts from "../../../constants/Fonts";

const AlbumDetail = ({size, img, description, title}) => {
    return (
        <TouchableOpacity style={styles({size}).container}>
                <Image style={styles({size}).cover} source={{uri: img}}/>
                <View style={styles({size}).textWrapper}>
                    <Text style={styles({size}).description}>{description}</Text>
                    <Text style={styles({size}).title}>{title}</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = (props) => StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFFFF0',
        borderRadius: 16,
        width: ratioH(props.size) * 254,
        height: ratioH(props.size) * 283,
        shadowColor: "black",
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
    },
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
    title: {
        ...Fonts.semiBold,
        fontSize: ratioH(props.size * 24),
        color: '#191D21'
    },
    description: {
        ...Fonts.regular,
        fontSize: ratioH(props.size * 12),
        color: '#191D21'
    }
})

export default AlbumDetail