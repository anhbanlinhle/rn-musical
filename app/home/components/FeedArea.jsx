import React from 'react'
import {View, StyleSheet, ScrollView, Text, Image, FlatList} from 'react-native'
import Fonts from "../../../constants/Fonts"
import {ratioW, ratioH} from "../../../utils/converter"
import AlbumDetail from "./AlbumDetail"

import AlbumData1 from '../../../data/albums-1.json'
import AlbumData2 from '../../../data/albums-2.json'
import {useSelector} from "react-redux";
import {backgroundPrimary, textPrimary} from "../../../constants/Colors";


const FeedArea = () => {
    const theme = useSelector(state => state.appData.theme)

    const renderPopularSection = () => {
        return (
            <View style={styles.popularSection}>
                <Text style={styles.title(theme)}>Popular</Text>
                <FlatList
                    data={AlbumData1}
                    style={styles.albumDetail}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={
                        ({item}) => (
                            <AlbumDetail
                                size={1}
                                img={item.img}
                                description={item.description}
                                title={item.title}
                                type={item.type}
                            />
                        )
                    }
                />
            </View>
        )
    }

    const renderTopAlbumSection = () => {
        return (
            <View style={styles.topAlbumSection}>
                <Text style={styles.title(theme)}>Top Albums</Text>
                <FlatList
                    data={AlbumData2}
                    style={styles.albumDetail}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={
                        ({item}) => (
                            <AlbumDetail
                                size={0.8}
                                img={item.img}
                                description={item.description}
                                title={item.title}
                                type={item.type}
                            />
                        )
                    }
                />
            </View>
        )
    }

    return (
        <View style={styles.container(theme)}>
            <ScrollView>
                {renderPopularSection()}
                {renderTopAlbumSection()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (theme) => ({
        backgroundColor: backgroundPrimary(theme),
        flexDirection: 'row',
        marginLeft: ratioW(24),
    }),
    title: (theme) => ({
        ...Fonts.semiBold,
        fontSize: ratioW(24),
        color: textPrimary(theme),
        marginBottom: ratioH(16),
    }),
    popularSection: {
    },
    topAlbumSection: {
        marginVertical: ratioH(16),
    },
    albumDetail: {
        height: ratioH(283 + 16),
        gap: 4,
    }
})

export default FeedArea