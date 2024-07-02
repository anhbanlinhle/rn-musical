import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Fonts from '../constants/Fonts'
import Icons from '../constants/Icons'

const App = () => {
    return (
        <View style={styles.container}>
            <Icons.Heart />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default App