import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUserDetailsFromApiAsync } from '../services/network';

export default function UserDetails({id}) {
    const [userDetails, setUserDetails] = useState([])
    const fetchUserDetails = () => {
        getUserDetailsFromApiAsync(id).then(data => {
            setUserDetails(data)
        });
    }

    useEffect(() => {
        fetchUserDetails();
        if(userDetails.company) {
            console.log(userDetails.company.name, 'hh');
        }
    }, [userDetails]);
    return (
        <SafeAreaView style={{flex: 1}}>
            <View >
                {
                    userDetails &&
                    <>
                        <Text>Name : {userDetails.name}</Text>
                        <Text>Username : {userDetails.username}</Text>
                        {
                            userDetails.company && <Text>Company : {userDetails.company.name}</Text>
                        }
                        <Text>Email : {userDetails.email}</Text>
                        <Text>Phone : {userDetails.phone}</Text>
                    </>
                }
            </View>
        </SafeAreaView>
    )
};
