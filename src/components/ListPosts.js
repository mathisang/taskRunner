import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {getUserPosts} from '../services/network';

export default function ListPosts(id) {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        getUserPosts(id.id).then(data => {
            setPosts([...posts, ...data]);
        })
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text>Posts</Text>
                <FlatList
                    data={posts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => {
                        return <Text>
                            {item.title}
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
