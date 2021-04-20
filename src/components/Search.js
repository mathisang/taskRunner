import React from 'react';
import { TextInput, View, StyleSheet, Image } from "react-native";
import { Icon } from 'react-native-elements';

export default function Search ({onSearch}) {

        return (
            <View>
                <View style={styles.searchContent}>
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
        height: 50,
        padding: 10,
        flex: 1
    },
    searchContent: {
        marginTop : 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10
    }
})
