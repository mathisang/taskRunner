import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUserDetailsFromApiAsync } from '../services/network';
import UserDetails from "../components/UserDetails";

export default function SingleUser({route}) {
    const { id } = route.params;

    return (
        <SafeAreaView style={{flex: 1}}>
            <View >
               <UserDetails id={id}/>
            </View>
        </SafeAreaView>
    )
};
