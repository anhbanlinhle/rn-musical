import React from 'react'
import {View, StyleSheet, ScrollView, Text, Image, FlatList, TouchableOpacity} from 'react-native'
import Fonts from "../../../constants/Fonts"
import {ratioW, ratioH} from "../../../utils/converter"
import AlbumDetail from "./AlbumDetail"

import AlbumData1 from '../../../data/albums-1.json'
import AlbumData2 from '../../../data/albums-2.json'
import {backgroundPrimary, textPrimary} from "../../../constants/Colors";
import Images from "../../../constants/Images";
import {selectTheme} from "../../../store/themeSlice";
import {useSelector} from "react-redux";
import {selectLiked} from "../../../store/likedSlice";


const FeedArea = () => {
    // const theme = useSelector(state => state.appData.theme)
    // const likedPlaylists = useSelector(state => state.likedData.likedPlaylists)
    // const likedPlaylists = []
    const theme = useSelector(selectTheme).theme
    const likedPlaylists = useSelector(selectLiked)

    const renderLikedSongs = () => {
        return (
            likedPlaylists.length > 0 ? (
                <View style={styles.popularSection}>
                    <Text style={styles.title(theme)}>Liked Playlists</Text>
                    <View style={styles.albumDetail}>
                        <AlbumDetail
                            size={1}
                            img={"https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg"}
                            description={`${likedPlaylists.length} playlists`}
                            title={"Liked Playlists"}
                            type={3}
                            index={-1}
                        />
                    </View>
                </View>
            ) : null
        )
    }

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
                                index={item.id}
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
                                index={item.id}
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
                {renderLikedSongs()}
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