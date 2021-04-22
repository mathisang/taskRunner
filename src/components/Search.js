import React from 'react';
import { TextInput, View, StyleSheet, Image } from "react-native";
import { Icon } from 'react-native-elements';

export default function Search ({onSearch}) {

        return (
            <View>
                <View style={styles.searchContainer}>
                    <Icon name='search' size={30} />
                    <TextInput
                        style={styles.textinput}
                        onChangeText={(text) => text.length >= 3 ? onSearch(text) : onSearch(null)}
                        placeholder='Search User' />
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    textinput: {
        height: 45,
        padding: 10,
        flex: 1
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 5,
        paddingRight: 5,
        /*boxShadow: '0px 0px 5px rgba(8, 5, 49, 0.2)',*/
        shadowOpacity: 1,
        shadowColor: 'rgba(8, 5, 49, 0.2)',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 15,
        borderRadius: 11,
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})
