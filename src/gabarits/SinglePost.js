import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList, Modal, TextInput} from 'react-native';
import {COLORS} from "../global-styles/colors";
import Card from "../components/Card";
import CardComment from "../components/CardComment";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {useStore} from "../components/store";


export default function SinglePost({route}) {
    const {post} = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [inputName, setInputName] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [inputContent, setInputContent] = useState();
    const userPost = useStore(state => state.userPost);
    const setUserPost = useStore(state => state.setUserPost)
    const addComment = useStore(state => state.addComment)



    useEffect(()=>{
        setUserPost(post);
        console.log(userPost, "post store")
        console.log(userPost.id, "post store id")
    },[post.id])

    useEffect(()=> {
        console.log(userPost, "user post form useEffect");
    },[userPost])


    const createComment = () => {
        fetch('http://vps791823.ovh.net/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post: "\/api\/posts\/"+post.id,
                name: inputName,
                email: inputEmail,
                body: inputContent
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => addComment(json))
            .then(() => setModalVisible(!modalVisible))
    }

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>Ajouter un commentaire</Text>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1
                            }}
                            placeholder={"Nom"}
                            onChangeText={text => setInputName(text)}
                        />
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1
                            }}
                            placeholder={"Email"}
                            onChangeText={text => setInputEmail(text)}
                        />
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1
                            }}
                            placeholder={"Message"}
                            onChangeText={text => setInputContent(text)}
                        />

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Annuler</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => createComment()}
                        >
                            <Text style={styles.textStyle}>Ajouter</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View>
                <Text style={styles.title}>{post.title}</Text>
            </View>
            <View>
                <Text style={styles.body}>{post.body}</Text>
            </View>
            <View style={styles.comments_header}>
                    <Text style={styles.subTitle}>Commentaires({userPost.comments ? userPost.comments.length : null})</Text>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text style={styles.link}>Commenter</Text>
                </Pressable>
            </View>
            <FlatList keyExtractor={item => item.id.toString()} data={userPost.comments} renderItem={({item})=> <CardComment comment={item}/>}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: 15,
        paddingRight: 15,

    },
    title: {
        marginBottom: 20,
        color: '#020F22',
        fontSize: 28,
        paddingTop: 15,
        paddingLeft: 10,
        fontWeight: '700',
    },
    subTitle: {
        color: '#020F22',
        fontSize: 20,
        fontWeight: '700',
    },
    comments_header: {
        paddingTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {
        marginBottom: 20,
        color: '#020F22',
        fontSize: 16,
        paddingTop: 20,
        paddingLeft: 10,
        fontWeight: '500',
    },
    link: {
        color: '#003566',
        fontSize: 16,
        fontWeight: '600',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        width: '90%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        position: 'relative',
        top: 60,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },

});