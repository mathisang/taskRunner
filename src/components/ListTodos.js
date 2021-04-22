import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';
import {getUserTodos} from '../services/network';

export default function ListTodos({userTodos, setUserDetails, globalStyles}) {

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

    return (
        <View style={globalStyles.containerMax}>
            <View style={styles.boxTodo}>
                <Text style={globalStyles.title}>Tâches</Text>
                <Text style={globalStyles.link}>Ajouter</Text>
            </View>

            <View style={globalStyles.shadowBox}>
                <FlatList
                    data={userTodos}
                    scrollEnabled={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => {
                        return <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor="#ddd"
                            style={styles.boxTouchable}
                            onPress={() => updateTodo(item.id, item.completed)}>
                            <View style={styles.main_container}>
                                <View style={[styles.checkbox, item.completed && styles.checkboxChecked]}>
                                    {item.completed &&
                                    <Image style={styles.picture}
                                           source={require('../../assets/checked.png')}/>}
                                </View>
                                <View style={styles.desc}>
                                    <Text
                                        style={[styles.desc_title, item.completed && styles.textChecked]}>{item.title}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    boxTodo: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    main_container: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        width: '100%',
        shadowOpacity: 0.8,
        shadowColor: 'rgba(8, 5, 49, 0.1)',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 15,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center'
    },
    boxTouchable: {
        height: 64,
        width: '94%',
        marginTop: 6,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 6,
        borderRadius: 16,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#3D6D99',
        marginRight: 16,
        borderRadius: 2
    },
    checkboxChecked: {
        backgroundColor: '#3D6D99',
        alignItems: 'center',
        justifyContent: 'center'
    },
    picture: {
        width: 13,
        height: 11
    },
    desc: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    desc_title: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    textChecked: {
        textDecorationLine: 'line-through',
        color: '#4e555f'
    },
    desc_date: {
        fontWeight: '300',
        color: 'grey',
        fontSize: 18,
    },
});
