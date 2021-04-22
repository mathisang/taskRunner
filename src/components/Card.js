import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Animated from 'react-native-reanimated';

export default function Card  ({ onClick, name}) {
    return(
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ddd"
            onPress={onClick}
            style={styles.boxTouchable}>
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
        height: '100%',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        width: '100%',
        borderRadius: 16,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(8, 5, 49, 0.1)',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 15,
        backgroundColor: 'white'
    },
    boxTouchable: {
        height: 70,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 6,
        marginBottom: 6,
        borderRadius: 16,
    },
   arrow: {
       width: 10,
       marginRight: 3
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
