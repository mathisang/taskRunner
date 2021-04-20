import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, View, Text} from 'react-native';
import { getUsersFromApiAsync } from '../services/network';
import ListUsers from "../components/ListUsers";
import Search from "../components/Search";

export default function Home({navigation: {navigate}}) {

    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');

    const getUsersBySearch = (searchedText) => {
        setSearchText(searchedText);
        setUsers([])
        fetchUsers(searchedText, true);
    }

    const fetchUsers = (searchText, isSearching= false) => {
            getUsersFromApiAsync(searchText).then(data => {
                if(isSearching) {
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
            <Search onSearch={(searchedText) => getUsersBySearch(searchedText)}/>
        <ListUsers users={users} itemClicked={(id) => navigate('Informations', {id : id})}/>
        </>
    )
}
