import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import UserInformations from "../components/UserInformations";
import {getUserDetails} from "../services/network";
import ListTodos from "../components/ListTodos";
import ListAlbums from "../components/ListAlbums";
import ListPosts from "../components/ListPosts";

export default function SingleUser({route, username, navigation: {navigate}}) {
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
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
                <UserInformations userInfos={userDetails} />
                <ListTodos userTodos={userDetails.todos} setUserDetails={setUserDetails} />
                <ListAlbums userAlbums={userDetails.albums} itemClicked={(id, album) => navigate('Album', {id: id, album: album})}/>
                <ListPosts userPosts={userDetails.posts} />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14
        // backgroundColor: 'red'
    },
});