import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUsersFromApiAsync } from '../services/network';

export default function ListUsers() {
    const [users, setUsers] = useState([]);

    const fetchMovies = () => {
        getUsersFromApiAsync().then(usersJson => {
                setUsers([...users, ...usersJson]);
        })
    }

    useEffect(() => {
        fetchMovies();
    }, [])

        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <FlatList data={users} renderItem={({item})=> <Text>{item.name}</Text>}
                    />
                    <Text>OU2</Text>
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
