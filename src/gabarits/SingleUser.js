import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet, Button} from 'react-native';
import UserInformations from "../components/UserInformations";
import {getUserDetails} from "../services/network";
import ListTodos from "../components/ListTodos";
import ListAlbums from "../components/ListAlbums";
import ListPosts from "../components/ListPosts";
import Map from "../components/Map";
import SingleMap from "../components/SingleMap";
import {COLORS} from "../global-styles/colors";
import {useStore} from "../components/store";

export default function SingleUser({route, username, navigation: {navigate}}) {
    const {id} = route.params;
    const [userDetails, setUserDetails] = useState([])
    const setUserPosts = useStore(state => state.setUserPosts)
    const fetchUserDetails = () => {
        getUserDetails(id).then(data => {
            setUserDetails(data);
            setUserPosts(data.posts);
        });
    }


    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <UserInformations userInfos={userDetails} globalStyles={globalStyles} />
                <SingleMap userLat={userDetails.lat} userLng={userDetails.lng} globalStyles={globalStyles} />
                <ListTodos userId={id} userTodos={userDetails.todos} setUserDetails={setUserDetails} globalStyles={globalStyles} />
                <ListAlbums userAlbums={userDetails.albums}  itemClicked={(id, album) => navigate('Album', {id: id, album: album})} globalStyles={globalStyles} />
                <ListPosts userPosts={userDetails.posts} itemClicked={(id, post) => navigate('Post', {id: id, post: post})} globalStyles={globalStyles} />
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
});

const globalStyles = StyleSheet.create({
    containerMax: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        color: '#020F22',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8
    },
    label: {
        color: '#404751',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 2
    },
    textInformation: {
        color: '#020F22',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    },
    lastTextInformation: {
        color: '#020F22',
        fontSize: 16,
        fontWeight: '600'
    },
    shadowBox: {
        shadowOpacity: 0.8,
        shadowColor: 'rgba(8, 5, 49, 0.16)',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 15,
        backgroundColor: COLORS.white,
        borderRadius: 6
    },
    link: {
        color: '#003566',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    }
});