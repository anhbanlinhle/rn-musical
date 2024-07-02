import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Fonts from '../constants/Fonts'
import Icons from '../constants/Icons'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Onboard from "./Onboard"
import Home from "./Home"
import Playlist from "./Playlist"
import Song from "./Song"

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Onboard"}
                    component={Onboard}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={"Playlist"}
                    component={Playlist}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name={"Song"}
                    component={Song}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
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