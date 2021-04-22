import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';

export default function ListAlbums({userAlbums, itemClicked }) {

    useEffect(()=> {
        console.log(userAlbums, 'albums');
    },[userAlbums])
    return (
        <View style={styles.container}>
            <Text>Albums</Text>
            <FlatList
                data={userAlbums}
                scrollEnabled={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                    return <Text onPress={() => itemClicked(item.id, item)} >
                        {item.title}
                    </Text>
                }
                }
            />
        </View>
    )
}
/*navigate('Album', {id: item.id, albums: item})*/
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
