import React, {useState, useEffect} from 'react';
import {ActivityIndicator, TouchableHighlight, Text} from 'react-native';
import {Button, View, StyleSheet} from 'react-native';
import {getUsersFromApiAsync} from '../services/network';
import ListUsers from "../components/ListUsers";
import Search from "../components/Search";
import Map from "../components/Map";
import {COLORS} from "../global-styles/colors";

export default function Home({navigation: {navigate}}) {

    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isListingScreen, setListingScreen] = useState(true);


    const HomeToggleNav = () => {
        return (
            <View style={{
                flexDirection: "row",
                zIndex: "1",
            }}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#ddd"
                  onPress={() => setListingScreen(true)}
                    style={{ marginRight:40,
                        marginLeft:40,
                        paddingTop:10,
                        paddingBottom:10,
                        borderRadius:10,
                        borderWidth: 1,
                        borderColor: '#fff',
                    backgroundColor: isListingScreen && COLORS.active}}
                >
                    <Text style={{color: isListingScreen ? COLORS.white : COLORS.inactiveCta, textAlign:'center',
                        paddingLeft : 10,
                        paddingRight : 10}}>Utilisateurs</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#ddd"
                    onPress={() => setListingScreen(false)}
                    style={{ marginRight:40,
                        marginLeft:40,
                        paddingTop:10,
                        paddingBottom:10,
                        borderRadius:10,
                        borderWidth: 1,
                        borderColor: '#fff',
                        backgroundColor: !isListingScreen && COLORS.active}}
                >
                    <Text style={{color: !isListingScreen ? COLORS.white : COLORS.inactiveCta, textAlign:'center',
                        paddingLeft : 10,
                        paddingRight : 10}}>Carte</Text>
                </TouchableHighlight>
            </View>
            )
    }

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
            <HomeToggleNav/>
            {
                isListingScreen ? <><Search onSearch={(searchedText) => getUsersBySearch(searchedText)}/>
                    <ListUsers users={users} itemClicked={(id) => navigate('Informations', {id: id})}/></>
                    : <Map users={users}/>
            }

        </>
    )
}
