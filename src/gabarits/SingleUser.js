import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUserDetailsFromApiAsync } from '../services/network';

export default function SingleUser({route, navigation}) {

    const [userDetails, setUserDetails] = useState([])
    const { id } = route.params;

    const fetchUserDetails = () => {
        getUserDetailsFromApiAsync(id).then(data => {
            setUserDetails(data)
        });
    }

    useEffect(() => {
        fetchUserDetails();
        if(userDetails[0]) {
            console.log(route, 'hh');
        }
    }, [userDetails]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View >
                {
                    userDetails[0] && <Text>{userDetails[0].name}</Text>
                }
            </View>
        </SafeAreaView>
    )
};
