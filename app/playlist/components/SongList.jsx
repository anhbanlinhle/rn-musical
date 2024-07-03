import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import SongItem from "./SongItem";

import SongData from "../../../data/songs.json"

const SongList = () => {
    return (
        <View style={styles.container}>
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
                        />
                    )
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: ratioH(42),
        width: ratioW(375)
    },
})

export default SongList