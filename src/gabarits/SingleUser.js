import React, {useState, useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import UserInformations from "../components/UserInformations";
import {getUserDetails} from "../services/network";
import ListTodos from "../components/ListTodos";


export default function SingleUser({route}) {
    const {id} = route.params;
    const [userDetails, setUserDetails] = useState([])

    const fetchUserDetails = () => {
        getUserDetails(id).then(data => {
            setUserDetails(data)
        });
    }

    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <UserInformations userInfos={userDetails}/>
                <ListTodos userTodos={userDetails.todos} setUserDetails={setUserDetails} />
                {/*<ListAlbums id={id}/>*/}
                {/*<ListPosts id={id}/>*/}
            </View>
        </SafeAreaView>
    )
};
