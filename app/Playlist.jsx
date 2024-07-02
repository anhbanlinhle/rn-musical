import React from 'react'
import {View, StyleSheet, Button} from 'react-native'

const Playlist = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Song"
                onPress={() =>
                    navigation.navigate('Song')
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

export default Playlist