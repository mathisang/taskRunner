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
    const [flashMessage, setFlashMessage] = useState({'enabled': false, 'type': '', 'text': ''});


    useEffect(() => {
        setUserPost(post);
    }, [post.id])

    const cancelModal = () => {
        setFlashMessage({'enabled': false, 'type': '', 'text': ''})
        setModalVisible(!modalVisible)
    }

    const closeModal = (json) => {
        if (json) {
            addComment(json);
            setFlashMessage({
                'enabled': true,
                'type': 'success',
                'text': 'Votre commentaire à été ajouté avec succès !'
            });
        } else {
            setFlashMessage({
                'enabled': true,
                'type': 'error',
                'text': 'Impossible d\'ajouter ce commentaire ! Veuillez ressayer.'
            });
        }

        setTimeout(function () {
            setFlashMessage({'enabled': false, 'type': '', 'text': ''})
            setModalVisible(!modalVisible);
        }, 2000);
    }

    const createComment = () => {
        inputName && inputEmail && inputContent ?
            fetch('http://vps791823.ovh.net/api/comments', {
                method: 'POST',
                body: JSON.stringify({
                    post: "\/api\/posts\/" + post.id,
                    name: inputName,
                    email: inputEmail,
                    body: inputContent
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => closeModal(json))
            : setFlashMessage({'enabled': true, 'type': 'error', 'text': 'Veuillez remplir tous les champs.'})
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <Modal
                style={styles.containerMax}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{width: '100%'}}>
                            {flashMessage.enabled &&
                            <Text style={[styles.flashMessage, flashMessage.type === 'error' ? styles.errorFlash : styles.successFlash]}>{flashMessage.text}</Text>}
                            <Text style={styles.title}>Ajouter un commentaire</Text>
                            <TextInput
                                style={[styles.inputTodo, styles.shadowBox]}
                                placeholder={"Nom"}
                                onChangeText={text => setInputName(text)}
                            />
                            <TextInput
                                style={[styles.inputTodo, styles.shadowBox]}
                                placeholder={"Email"}
                                onChangeText={text => setInputEmail(text)}
                            />
                            <TextInput
                                style={[styles.textArea, styles.shadowBox]}
                                numberOfLines={6}
                                multiline={true}
                                placeholder={"Message"}
                                onChangeText={text => setInputContent(text)}
                            />

                            <View style={styles.listButtonsModal}>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => cancelModal()}
                                >
                                    <Text style={styles.textStyleClose}>Annuler</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonValid]}
                                    onPress={() => createComment()}
                                >
                                    <Text style={styles.textStyleValid}>Ajouter</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.containerMax}>
                <Text style={styles.topTitle}>{post.title}</Text>
            </View>
            <View style={styles.containerMax}>
                <Text style={styles.body}>{post.body}</Text>
            </View>
            <View style={[styles.comments_header, styles.containerMax]}>
                <Text style={styles.subTitle}>Commentaires({userPost.comments ? userPost.comments.length : null})</Text>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text style={styles.link}>Commenter</Text>
                </Pressable>
            </View>
            <FlatList keyExtractor={item => item.id.toString()} data={userPost.comments}
                      renderItem={({item}) => <CardComment comment={item}/>}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    containerMax: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    topTitle: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 16
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body: {
        marginBottom: 20,
        color: '#020F22',
        fontSize: 16,
        paddingTop: 20,
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
    flashMessage: {
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        padding: 10,
        marginBottom: 18
    },
    errorFlash: {
        backgroundColor: '#FFCCCC',
        borderColor: '#C0392B',
        color: '#C0392B'
    },
    successFlash: {
        backgroundColor: '#E9F6EF',
        borderColor: '#2B8D54',
        color: '#2B8D54'
    },
    listButtonsModal: {
        width: '100%',
        flexDirection: 'row'
    },
    inputTodo: {
        height: 50,
        paddingLeft: 10,
        fontSize: 16,
        marginTop: 10,
    },
    textArea: {
        height: 150,
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 16,
        marginBottom: 30,
        marginTop: 10
    },
    title: {
        color: '#020F22',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8
    },
    shadowBox: {
        shadowOpacity: 0.8,
        shadowColor: 'rgba(8, 5, 49, 0.16)',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 15,
        backgroundColor: COLORS.white,
        borderRadius: 6
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
        padding: 30,
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
        borderRadius: 8,
        padding: 12,
        elevation: 2,
        width: '49%'
    },
    buttonValid: {
        backgroundColor: "#003566",
    },
    textStyleClose: {
        color: "#404751",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16
    },
    textStyleValid: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});