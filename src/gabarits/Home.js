import React, {useState, useEffect} from 'react';
import {ActivityIndicator, TouchableHighlight, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Button, View, StyleSheet} from 'react-native';
import {getUsersFromApiAsync} from '../services/network';
import ListUsers from "../components/ListUsers";
import Search from "../components/Search";
import Map from "../components/Map";
import {COLORS} from "../global-styles/colors";
import HomeToggleNav from "../components/HomeToggleNav";

export default function Home({navigation: {navigate}}) {

    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isListingScreen, setListingScreen] = useState(true);

    const getUsersBySearch = (searchedText) => {
        setSearchText(searchedText);
        setUsers([])
        fetchUsers(searchedText, true);
    }

    const fetchUsers = (searchText, isSearching = false) => {
        getUsersFromApiAsync(searchText).then(data => {
            if (isSearching) {
                setUsers(data);
            } else {
                setUsers([...users, ...data]);
            }

        })
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <>
            <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <HomeToggleNav setListingScreen={setListingScreen} isListingScreen={isListingScreen}/>
            {
                isListingScreen ? <><Search onSearch={(searchedText) => getUsersBySearch(searchedText)}/>
                    <ListUsers users={users} itemClicked={(id, name) => navigate('Informations', {id: id, name: name})}/></>
                    : <Map users={users} itemClicked={(id, name) => navigate('Informations', {id: id, name: name})}/>
            }
                </SafeAreaView>

        </>
    )
}
