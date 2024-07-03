import React from 'react'
import {View, StyleSheet, ScrollView, Text, Image, FlatList} from 'react-native'
import Fonts from "../../../constants/Fonts"
import {ratioW, ratioH} from "../../../utils/converter"
import AlbumDetail from "./AlbumDetail"

import AlbumData from '../../../data/albums.json'

const FeedArea = () => {
    const renderPopularSection = () => {
        return (
            <View style={styles.popularSection}>
                <Text style={styles.title}>Popular</Text>
                <FlatList
                    data={AlbumData}
                    style={styles.albumDetail}
                    horizontal={true}
                    renderItem={
                        ({item}) => (
                            <AlbumDetail
                                size={1}
                                img={item.img}
                                description={item.description}
                                title={item.title}
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
                <Text style={styles.title}>Top Albums</Text>
                <FlatList
                    data={AlbumData}
                    style={styles.albumDetail}
                    horizontal={true}
                    renderItem={
                        ({item}) => (
                            <AlbumDetail
                                size={0.8}
                                img={item.img}
                                description={item.description}
                                title={item.title}
                            />
                        )
                    }
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {renderPopularSection()}
                {renderTopAlbumSection()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginLeft: ratioW(24),
    },
    title: {
        ...Fonts.semiBold,
        fontSize: ratioW(24),
        color: '#191D21',
        marginBottom: ratioH(16),
    },
    popularSection: {
    },
    topAlbumSection: {
        marginBottom: ratioH(16),
    },
    albumDetail: {
        height: ratioH(283 + 16),
        gap: 4,
    }
})

export default FeedArea