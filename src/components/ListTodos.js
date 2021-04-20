import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUserTodos } from '../services/network';

export default function ListTodos(id) {
    const [todos, setTodos] = useState([]);

    const fetchTodos = () => {
        getUserTodos(id.id).then(data => {
            setTodos([...todos, ...data]);
        })
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <FlatList data={todos} renderItem={({item})=> <Text>{item.title} : {item.completed ? 'DONE' : 'TODO'}</Text>} />
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
