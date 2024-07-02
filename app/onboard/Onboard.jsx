import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Background from "./components/Background"
import Banner from "./components/Banner"
import Logo from "./components/Logo"
import HomeButton from "./components/HomeButton"

const Onboard = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Background/>
            <Banner/>
            <Logo/>
            <HomeButton navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24
    }
})

export default Onboard