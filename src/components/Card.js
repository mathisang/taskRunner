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
                    <Image style={styles.picture}
                           resizeMode={'contain'}
                           source={require('../../assets/user.png')} />

                </View>
                <View style={styles.desc}>
                    <Text style={styles.desc_title}>{name}</Text>
                </View>
                <View style={styles.arrow}>
                    <Image style={styles.picture}
                           resizeMode={'contain'}
                           source={require('../../assets/arrow.png')} />

                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: 70,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        width: '90%',
        margin: 'auto',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 8,
        // boxShadow: '1px 1px 15px rgba(8, 5, 49, 0.1)'
    },
   arrow: {

    },
    image:  {
        width: 50,
        marginRight: 20
    },
    picture : {
        width: '100%',
        height: '100%'
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
    desc_date: {
        fontWeight: '300',
        color: 'grey',
        fontSize: 18,
    },
})
