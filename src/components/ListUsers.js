import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUsersFromApiAsync } from '../services/network';

export default function ListUsers({itemClicked}) {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        getUsersFromApiAsync().then(data => {
                setUsers([...users, ...data]);
        })
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    useEffect(() => {
        console.log(itemClicked, 'item')
    }, [itemClicked])

        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <FlatList keyExtractor={item => item.id.toString()} data={users} renderItem={({item})=> <Text  onPress={()=> itemClicked(item.id)}>{item.name}</Text>}
                    />
                </View>
            </SafeAreaView>
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
