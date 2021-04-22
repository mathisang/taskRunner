import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from "../gabarits/Home";
import SingleUser from "../gabarits/SingleUser";
import SingleAlbum from "../gabarits/SingleAlbum";
import {getCurrentUsername} from "../services/network";

const Stack = createStackNavigator();
export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Task Runner',
                    headerStyle: {
                        backgroundColor: '#003566',
                        height: 74,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 18
                    },
                    headerStatusBarHeight: 25
                }}
            />
            <Stack.Screen
                name="Informations"
                component={SingleUser}
                options={({navigation: {navigate}, route}) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: '#003566',
                        height: 74,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 18
                    },
                    headerBackTitle: 'Retour',
                    headerBackTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 14
                    },
                    headerStatusBarHeight: 25
                })}/>
            <Stack.Screen
                name="Album"
                component={SingleAlbum}
                options={({navigation: {navigate}, route}) => ({
                    title: route.params.name,
                    headerStyle: {
                        backgroundColor: '#003566',
                        height: 74,
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 18
                    },
                    headerBackTitle: 'Retour',
                    headerBackTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 14
                    },
                    headerStatusBarHeight: 25
                })}/>
        </Stack.Navigator>
    )
}
