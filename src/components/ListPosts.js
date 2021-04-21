import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';

export default function ListPosts({userPosts}) {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text>Posts</Text>
                <FlatList
                    data={userPosts}
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
