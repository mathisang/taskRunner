import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack'
import Home from "../gabarits/Home";
import SingleUser from "../gabarits/SingleUser";
const Stack = createStackNavigator();
export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
                          options={{
                              title: null
                          }}
            />
            <Stack.Screen
                name="Details"
                component={SingleUser}
                options={ ({ navigation: {navigate}, route }) => ({
                    title: null
                })}/>
        </Stack.Navigator>
    )
}
