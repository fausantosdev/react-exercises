import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

// const AppStack = createStackNavigator()
const Drawer = createDrawerNavigator()

import Teste1 from './pages/Teste1'
import Teste2 from './pages/Teste2'

export default function Routes() {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Teste01">
                <Drawer.Screen name="Teste01" component={Teste1} />
                <Drawer.Screen name="Teste02" component={Teste2} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}