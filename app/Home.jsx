import React from 'react'
import {View, StyleSheet, Button} from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Playlist"
                onPress={() =>
                    navigation.navigate('Playlist')
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

export default Home