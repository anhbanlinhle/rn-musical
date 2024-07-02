import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Fonts from '../constants/Fonts'

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={{ ...Fonts.regular}}>
                Poppins Regular
            </Text>
            <Text style={{ ...Fonts.bold}}>
                Poppins Bold
            </Text>
            <Text style={{ ...Fonts.italic}}>
                Poppins Italic
            </Text>
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