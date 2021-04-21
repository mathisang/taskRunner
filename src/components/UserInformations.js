import React from 'react';
import { SafeAreaView, View, Text} from 'react-native';

export default function UserInformations({userInfos}) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View >
                {
                    userInfos &&
                    <>
                        <Text>Name : {userInfos.name}</Text>
                        <Text>Username : {userInfos.username}</Text>
                        {
                            userInfos.company && <Text>Company : {userInfos.company}</Text>
                        }
                        <Text>Email : {userInfos.email}</Text>
                        <Text>Phone : {userInfos.phone}</Text>
                    </>
                }
            </View>
        </SafeAreaView>
    )
};
