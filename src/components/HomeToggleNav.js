import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Animated from 'react-native-reanimated';
import {COLORS} from "../global-styles/colors";

export default function HomeToggleNav({ setListingScreen, isListingScreen}) {

    const styles = StyleSheet.create({
        btn: {
            paddingTop:10,
            paddingBottom:10,
            borderRadius:8,
            width: '49%',
        },
        btnActive:  {
            paddingTop:10,
            paddingBottom:10,
            borderRadius:8,
            backgroundColor: COLORS.active,
            width: '49%',
            // boxShadow: '1px 1px 15px rgba(8, 5, 49, 0.1)'
        },
        text: {
            color: COLORS.inactiveCta,
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
        },
        textActive: {
            color:  COLORS.white,
            textAlign:'center',
            paddingLeft : 10,
            paddingRight : 10
        },
        container: {
            flexDirection: 'row',
            zIndex: 1,
            width: '90%',
            margin: 'auto',
            marginTop: 15,
            marginBottom: 15,
            // boxShadow: '1px 1px 15px rgba(8, 5, 49, 0.1)',
            paddingLeft : 15,
            paddingRight : 15,
            justifyContent: 'space-between',
            backgroundColor: COLORS.background,
            borderRadius:8,
            paddingTop: 4,
            paddingBottom: 4
        }
    })
    return (
        <View style={styles.container}>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#ddd"
                onPress={() => setListingScreen(true)}
                style={isListingScreen ? styles.btnActive : styles.btn}
            >
                <Text style={isListingScreen ? styles.textActive : styles.text}>Utilisateurs</Text>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#ddd"
                onPress={() => setListingScreen(false)}
                style={!isListingScreen ? styles.btnActive : styles.btn}
            >
                <Text style={!isListingScreen ? styles.textActive : styles.text} >Carte</Text>
            </TouchableHighlight>
        </View>
    )
}