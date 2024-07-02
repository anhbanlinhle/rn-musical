import React from 'react'
import {View, StyleSheet, Button, Text} from 'react-native'

const Onboard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
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

export default Onboard