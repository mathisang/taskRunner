import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {COLORS} from "../global-styles/colors";


export default function SinglePost({route}) {
    const {post} = route.params;

    useEffect(()=> {
        console.log(post, "post");
    },[post])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>{post.title}</Text>
            </View>
            <View>
                <Text style={styles.body}>{post.body}</Text>
            </View>
            <View>
                <Text style={styles.subTitle}>Commentaires({post.comments.length})</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    title: {
        marginBottom: 20,
        color: '#020F22',
        fontSize: 28,
        paddingTop: 20,
        paddingLeft: 10,
        fontWeight: '700',
    },
    subTitle: {
        marginBottom: 20,
        color: '#020F22',
        fontSize: 18,
        paddingTop: 20,
        paddingLeft: 10,
        fontWeight: '700',
    },
    body: {
        marginBottom: 50,
        color: '#020F22',
        fontSize: 16,
        paddingTop: 20,
        paddingLeft: 10,
        fontWeight: '500',
    },

});