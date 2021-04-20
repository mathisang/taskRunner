import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUsersFromApiAsync } from '../services/network';
import ListUsers from "../components/ListUsers";

export default function Home({navigation: {navigate}}) {

    return (
        <>
        <ListUsers itemClicked={(id) => navigate('Details', {id : id})}/>
        </>
    )
}
