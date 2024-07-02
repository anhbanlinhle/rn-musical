import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Onboard from "./onboard/Onboard"
import Home from "./home/Home"
import Playlist from "./playlist/Playlist"
import Song from "./song/Song"

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

export default App