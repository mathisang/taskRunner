import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {getUserTodos} from '../services/network';

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

    const updateTodo = (idPost) => {
        const result = todos.map((obj) => {
            if (obj.id === idPost)
                obj.completed = !obj.completed;
            return obj;
        })
        setTodos(result);
    }

    const todoStyle = (options) => {
        let color = options === false ? 'red' : 'green';
        return {
            color: color,
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text>TODOs</Text>
                <FlatList
                    data={todos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => {
                        return <Text style={todoStyle(item.completed)} onPress={() => updateTodo(item.id)}>
                            {item.title} : {item.completed ? 'DONE' : 'TODO'}
                        </Text>
                    }
                    }
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
