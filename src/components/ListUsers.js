import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUsersFromApiAsync } from '../services/network';
import Card from './Card';

export default function ListUsers({itemClicked, users}) {

        return (
                <View style={styles.container}>
                    <FlatList keyExtractor={item => item.id.toString()} data={users} renderItem={({item})=> <Card name={item.username} onClick={()=> itemClicked(item.id, item.username)}/>}
                    />
                </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingHorizontal: 0
    },
    separator: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc'
    },
});
