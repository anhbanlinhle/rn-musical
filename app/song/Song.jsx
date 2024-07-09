import React, {useEffect, useState} from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import {useSelector} from "react-redux";
import {blue, orange, purple} from "../../constants/Colors";
import {selectTheme} from "../../store/themeSlice";
import {selectArtist, selectImg, selectLink, selectSong, selectType} from "../../store/songSlice";


const Song = ({route}) => {
    const {id} = route.params
    const img = useSelector(selectImg)
    const song = useSelector(selectSong)
    const artist = useSelector(selectArtist)
    const link = useSelector(selectLink)
    const type = useSelector(selectType)

    const theme = useSelector(selectTheme)

    const [color, setColor] = useState('#A6B9FF')

    useEffect(() => {
        switch (type) {
            case 1:
                setColor(blue(theme))
                break
            case 2:
                setColor(orange(theme))
                break
            case 3:
                setColor(purple(theme))
                break
            default:
                console.log('No type')
        }
    }, [])

    return (
        <View style={styles.container(color)}>
            <SafeAreaView>
                <Header
                    color={color}
                />
                <Content
                    // img={img}
                    // song={song}
                    // artist={artist}
                    // link={link}
                    color={color}
                    id={id}
                />
                <Footer
                    color={color}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: (color) => ({
        flex: 1,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
    }),
})

export default Song