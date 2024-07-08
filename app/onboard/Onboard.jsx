import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Background from "./components/Background"
import Banner from "./components/Banner"
import Logo from "./components/Logo"
import HomeButton from "./components/HomeButton"
import {useSelector} from "react-redux";
import {backgroundPrimary} from "../../constants/Colors";
import {selectTheme} from "../../store/themeSlice";

const Onboard = () => {
    const theme = useSelector(selectTheme).theme

    return (
        <SafeAreaView style={styles.container(theme)}>
            <Background/>
            <Banner/>
            <Logo/>
            <HomeButton/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: (theme) => ({
        flexDirection: 'column',
        flex: 1,
        backgroundColor: backgroundPrimary(theme),
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24
    })
})

export default Onboard