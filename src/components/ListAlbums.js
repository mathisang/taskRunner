import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {getUserAlbums} from '../services/network';

export default function ListAlbums(id) {
    const [albums, setAlbums] = useState([]);

    const fetchAlbums = () => {
        getUserAlbums(id.id).then(data => {
            setAlbums([...albums, ...data]);
        })
    }

    useEffect(() => {
        fetchAlbums();
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text>Albums</Text>
                <FlatList
                    data={albums}
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
