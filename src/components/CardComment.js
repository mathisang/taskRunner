import React, {useEffect} from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Animated from 'react-native-reanimated';

export default function CardComment(comment) {
    return(
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#ddd"
            style={styles.boxTouchable}>
            <View style={styles.main_container}>
                <View style={styles.user_container}>
                        <Image style={styles.picture}
                               resizeMode={'contain'}
                               source={require('../../assets/user.png')} />
                               <View style={styles.titleWrap}>
                                   <Text style={styles.text}>{comment.comment.name}</Text>
                               </View>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.text}>{comment.comment.body}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%',
        borderRadius: 16,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(8, 5, 49, 0.1)',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 15,
        backgroundColor: 'white'
    },
    user_container : {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    boxTouchable: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 16,
    },
    picture : {
        width: 40,
        height: 40,
        marginRight: 15
    },
    text: {
        color: '#020F22',
        fontSize: 16,
        fontWeight: '500',
        width: '100%',
    },
    titleWrap: {
        width: '86%',
    },

})
