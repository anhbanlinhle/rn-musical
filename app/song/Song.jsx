import React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"


const Song = ({route}) => {
    const {img, song, artist, link} = route.params

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Header/>
                <Content
                    img={img}
                    song={song}
                    artist={artist}
                    link={link}
                />
                <Footer/>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A6B9FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Song