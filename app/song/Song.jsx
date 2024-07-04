import React, {useEffect, useState} from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"


const Song = ({route}) => {
    const {img, song, artist, link, type} = route.params

    const [color, setColor] = useState('#A6B9FF')
    let typeUI = JSON.parse(JSON.stringify(type)).type

    useEffect(() => {
        switch (typeUI) {
            case 1:
                setColor('#A6B9FF')
                break
            case 2:
                setColor('#FFC76F')
                break
            case 3:
                setColor('#BBA5FF')
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