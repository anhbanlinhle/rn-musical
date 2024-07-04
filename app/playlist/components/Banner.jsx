import React, {useEffect, useState} from 'react'
import {View, StyleSheet, SafeAreaView, Image, Text, TouchableOpacity} from 'react-native'
import {ratioW, ratioH} from "../../../utils/converter"
import Icons from "../../../constants/Icons"
import Images from "../../../constants/Images"
import Fonts from "../../../constants/Fonts"
import {useNavigation} from "@react-navigation/native"

const Banner = ({type}) => {
    const navigation = useNavigation()
    const [imgSrc, setImgSrc] = useState(null)
    const [bannerColor, setColor] = useState('#A6B9FF')

    useEffect(() => {
        switch (type) {
            case 1:
                setImgSrc(Images.GenreCover1)
                setColor('#A6B9FF')
                break
            case 2:
                setImgSrc(Images.GenreCover2)
                setColor('#FFC76F')
                break
            case 3:
                setImgSrc(Images.GenreCover3)
                setColor('#BBA5FF')
                break
            default:
                console.log('No type')
        }
    }, [])

    const renderHeader = () => {
        return (
            <View style={styles().playlistHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icons.Back style={styles().iconBack}/>
                </TouchableOpacity>
                <Icons.Heart style={styles().iconLove}/>
                <Icons.Download style={styles().iconDownload}/>
            </View>
        )
    }

    const renderImage = () => {
        return (
            <View >
                <Image
                    source={imgSrc}
                    style={styles().playlistImage}
                />
            </View>
        )
    }

    const renderDescription = () => {
        return (
            <View style={styles().description}>
                <Text style={styles().mainTitle}>Songs to sing out loud</Text>
                <Text style={styles().subTitle}>30 songs to sing in the shower</Text>
            </View>
        )
    }

    return (
        <View style={styles().container(bannerColor)}>
            <SafeAreaView>
                {renderHeader()}
                {renderImage()}
                {renderDescription()}
            </SafeAreaView>
        </View>
    )
}

const styles = (props) => StyleSheet.create({
    container: bannerColor => ({
        backgroundColor: bannerColor,
        width: ratioW(375),
        height: ratioW(427),
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
    }),
    playlistHeader: {
        flexDirection: 'row',
        marginHorizontal: ratioW(26),
        width: ratioW(323),
        height: ratioW(32),
        alignItems: 'center',
    },
    iconBack: {
        width: ratioW(32),
        height: ratioW(32),
    },
    iconLove: {
        width: ratioW(32),
        height: ratioW(32),
        position: 'absolute',
        right: 0 + ratioW(32 + 18)
    },
    iconDownload: {
        width: ratioW(32),
        height: ratioW(32),
        position: 'absolute',
        right: 0
    },
    playlistImage: {
        width: ratioW(375),
        height: ratioW(261),
    },
    description: {
        marginHorizontal: ratioW(38),
    },
    mainTitle: {
        ...Fonts.semiBold,
        fontSize: ratioW(24),
        color: '#191D21'
    },
    subTitle: {
        ...Fonts.regular,
        fontSize: ratioW(14),
        color: '#656F77'
    },

})

export default Banner