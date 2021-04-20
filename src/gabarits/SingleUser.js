import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUserDetailsFromApiAsync } from '../services/network';
import ListTodos from "../components/ListTodos";

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
    }, [userDetails]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View >
                {
                    userDetails && <Text>{userDetails.name}</Text>
                }
                {
                    userDetails && <ListTodos id={id} />
                }
            </View>
        </SafeAreaView>
    )
};
