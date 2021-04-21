import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Animated from 'react-native-reanimated';

export default function Card  ({ onClick, name}) {
    return(
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ddd"
            onPress={onClick}>
            <View style={styles.main_container}>
                <View style={styles.image}>
                    <Image style={styles.moviePicture}
                           resizeMode={'contain'}
                           source={require('../../assets/user.png')} ></Image>

                </View>
                <View style={styles.desc}>
                    <Text style={styles.desc_title}>{name}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 100,
        flexDirection: 'row',
        paddingVertical: 10
    },
    image:  {
        width: 100,
        marginRight: 10
    },
    moviePicture : {
        flex: 1
    },
    desc: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    desc_title: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom:10,
    },
    desc_date: {
        fontWeight: '300',
        color: 'grey',
        fontSize: 18,
    },
})
