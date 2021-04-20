import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUserInfosFromApiAsync} from '../services/network';

export default function UserInformations({id}) {
    const [userInfos, setUserInfos] = useState([])
    const fetchUserInfos = () => {
        getUserInfosFromApiAsync(id).then(data => {
            setUserInfos(data)
        });
    }

    useEffect(() => {
        fetchUserInfos();
        if(userInfos.company) {
            console.log(userInfos.company.name, 'hh');
        }
    }, [userInfos]);
    return (
        <SafeAreaView style={{flex: 1}}>
            <View >
                {
                    userInfos &&
                    <>
                        <Text>Name : {userInfos.name}</Text>
                        <Text>Username : {userInfos.username}</Text>
                        {
                            userInfos.company && <Text>Company : {userInfos.company.name}</Text>
                        }
                        <Text>Email : {userInfos.email}</Text>
                        <Text>Phone : {userInfos.phone}</Text>
                    </>
                }
            </View>
        </SafeAreaView>
    )
};
