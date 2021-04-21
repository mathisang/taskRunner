import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {getUserTodos} from '../services/network';

export default function ListTodos({userTodos, setUserDetails}) {

    const updateTodo = (idPost, value) => {
        const result = userTodos.map((obj) => {
            if (obj.id === idPost)
                obj.completed = !obj.completed;
            return obj;
        })

        fetch('http://vps791823.ovh.net/api/todos/' + idPost, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: !value,
            }),
            headers: {
                'Content-type': 'application/merge-patch+json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(setUserDetails(prevState => ({
                    ...prevState,
                    todos: [
                        ...result
                    ]
                })
            ));
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
                    data={userTodos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => {
                        return <Text style={todoStyle(item.completed)}
                                     onPress={() => updateTodo(item.id, item.completed)}>
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
