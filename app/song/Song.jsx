import React, {useEffect, useState} from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import {useSelector} from "react-redux";
import {blue, orange, purple} from "../../constants/Colors";


const Song = ({route}) => {
    const {img, song, artist, link, type} = route.params

    const theme = useSelector(state => state.appData.theme)
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
                    img={img}
                    song={song}
                    artist={artist}
                    link={link}
                    color={color}
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