import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import UserInformations from "../components/UserInformations";

export default function SingleUser({route}) {
    const { id } = route.params;

    return (
        <SafeAreaView style={{flex: 1}}>
            <View >
               <UserInformations id={id}/>
            </View>
        </SafeAreaView>
    )
};
