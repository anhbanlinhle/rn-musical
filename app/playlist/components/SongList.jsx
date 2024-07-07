import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {ratioH, ratioW} from "../../../utils/converter";
import SongItem from "./SongItem";

import SongData from "../../../data/songs.json"
import {useSelector} from "react-redux";
import {backgroundPrimary} from "../../../constants/Colors";

const SongList = ({type}) => {
    const theme = useSelector(state => state.appData.theme)

    return (
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
                        />
                    )
                }
            />
        </View>
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