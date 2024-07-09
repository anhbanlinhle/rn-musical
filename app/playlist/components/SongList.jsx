import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import SongItem from "./SongItem";

import SongData from "../../../data/songs.js"
import Album1 from "../../../data/albums-1.json"
import Album2 from "../../../data/albums-2.json"
import {useSelector} from "react-redux";
import {backgroundPrimary} from "../../../constants/Colors";
import {selectTheme} from "../../../store/themeSlice";
import {selectLiked} from "../../../store/likedSlice";

const SongList = ({type, index}) => {
    const theme = useSelector(selectTheme)

    let renderData = []
    if (index === -1) {
        // const likedPlaylist = useSelector(state => state.likedData.likedPlaylists)
        const likedPlaylist = useSelector(selectLiked)
        const allPlaylist = Album1.concat(Album2)
        for (let i = 0; i < likedPlaylist.length; i++) {
            renderData.push(allPlaylist.find(item => item.id === likedPlaylist[i]))
        }
    }

    return (
        index !== -1 ? (
            <View style={styles.container(theme)}>
                <FlatList
                    data={SongData}
                    scrollEnabled={false}
                    renderItem={
                        ({item}) => (
                            <SongItem
                                img={item.img}
                                song={item.song}
                                artist={item.artist}
                                link={item.link}
                                type={type}
                                id={item.id}
                            />
                        )
                    }
                />
            </View>
        ) : (
            <View style={styles.container(theme)}>
                <FlatList
                    data={renderData}
                    scrollEnabled={false}
                    renderItem={
                        ({item}) => (
                            <SongItem
                                img={item.img}
                                song={item.title}
                                artist={item.description}
                                link={''}
                                type={type}
                            />
                        )
                    }
                />
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: (theme) => ({
        flex: 1,
        backgroundColor: backgroundPrimary(theme),
        marginTop: ratioH(42),
        width: ratioW(375)
    }),
})

export default SongList