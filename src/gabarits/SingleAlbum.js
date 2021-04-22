import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button, Image, FlatList} from 'react-native';
import Gallery from 'react-native-image-gallery';
import {COLORS} from "../global-styles/colors";


export default function SingleAlbum({route}) {
    const {album} = route.params;

    useEffect(()=> {
    console.log(album.photos[0].url , "hey");
    },[album])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>{album.title}</Text>
            </View>
            <View style={{height: '70%', top: 0}}>
                <Gallery
                    style={{ backgroundColor: COLORS.white }}
                    images={
                        album.photos.map((photo, index) => (
                        {source: { uri: photo.url }}
                    ))
                    }
                    pageMargin={25}
                    flatListProps={{windowSize: 1}}
                />
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
        marginBottom: 50,
        color: '#020F22',
        fontSize: 28,
        paddingTop: 20,
        paddingLeft: 10,
        fontWeight: '700',
    },
    picture: {
        width: '100%',
        height: '100%'
    },

});