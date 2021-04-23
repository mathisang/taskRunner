import React, {useState, useEffect} from 'react';
import {
    FlatList,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Image,
    Modal,
    TextInput
} from 'react-native';
import {getUserTodos} from '../services/network';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function ListTodos({userTodos, setUserDetails, globalStyles, userId}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [flashMessage, setFlashMessage] = useState({'enabled': false, 'type': '', 'text': ''});
    const [inputContent, setInputContent] = useState();

    const updateTodo = (idPost, value) => {
        const result = userTodos.map((obj) => {
            if (obj.id === idPost)
                obj.completed = !obj.completed;
            return obj;
        })

        fetch('http://vps791823.ovh.net/api/todos/' + idPost, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: !value,
            }),
            headers: {
                'Content-type': 'application/merge-patch+json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(setUserDetails(prevState => ({
                    ...prevState,
                    todos: [
                        ...result
                    ]
                })
            ));
    }

    const closeModal = (json) => {
        if(json) {
            setUserDetails(prevState => ({
                ...prevState,
                todos: [
                    ...userTodos,
                    {'id': json.id, 'title': json.title, 'completed': json.completed}
                ]
            }));
            setFlashMessage({'enabled': true, 'type': 'success', 'text': 'Votre tâche à été ajoutée avec succès !'});
        }
        else {
            setFlashMessage({'enabled': true, 'type': 'error', 'text': 'Impossible d\'ajouter cette tâche ! Veuillez ressayer.'});
        }

        setTimeout(function(){
            setFlashMessage({'enabled': false, 'type': '', 'text': ''})
            setModalVisible(!modalVisible);
        }, 2000);
    }

    const cancelModal = () => {
        setFlashMessage({'enabled': false, 'type': '', 'text': ''})
        setModalVisible(!modalVisible)
    }

    const createNewTodo = (content) => {
        content ?
            fetch('http://vps791823.ovh.net/api/todos', {
                method: 'POST',
                body: JSON.stringify({
                    user: "\/api\/users\/" + userId,
                    title: content,
                    completed: false
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => closeModal(json))
            : setFlashMessage({'enabled': true, 'type': 'error', 'text': 'Veuillez indiquer un nom de tâche'})
    }

    useEffect(() => {
        modalVisible ? console.log('coucou') : console.log('dommage')
    }, [modalVisible])

    return (
        <View style={globalStyles.containerMax}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{width: '100%'}}>
                            {flashMessage.enabled &&
                            <Text style={[styles.flashMessage, flashMessage.type === 'error' ? styles.errorFlash : styles.successFlash]}>{flashMessage.text}</Text>}
                            <Text style={globalStyles.title}>Ajouter une tâche</Text>
                            <TextInput
                                style={[styles.inputTodo, globalStyles.shadowBox]}
                                placeholder={"Nom de la tâche"}
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
                                    onPress={() => createNewTodo(inputContent)}
                                >
                                    <Text style={styles.textStyleValid}>Ajouter</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.boxTodo}>
                <Text style={globalStyles.title}>Tâches</Text>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text style={globalStyles.link}>Ajouter</Text>
                </Pressable>
            </View>

            <View style={globalStyles.shadowBox}>
                <FlatList
                    data={userTodos}
                    scrollEnabled={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => {
                        return <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor="#ddd"
                            style={styles.boxTouchable}
                            onPress={() => updateTodo(item.id, item.completed)}>
                            <View style={styles.main_container}>
                                <View style={[styles.checkbox, item.completed && styles.checkboxChecked]}>
                                    {item.completed &&
                                    <Image style={styles.picture}
                                           source={require('../../assets/checked.png')}/>}
                                </View>
                                <View style={styles.desc}>
                                    <Text
                                        style={[styles.desc_title, item.completed && styles.textChecked]}>{item.title}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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
        borderColor: '#C0392B' ,
        color: '#C0392B'
    },
    successFlash: {
        backgroundColor: '#E9F6EF',
        borderColor: '#2B8D54',
        color: '#2B8D54'
    },
    boxTodo: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listButtonsModal: {
        width: '100%',
        flexDirection: 'row'
    },
    inputTodo: {
        height: 50,
        paddingLeft: 10,
        fontSize: 16,
        marginTop: 8,
        marginBottom: 30
    },
    main_container: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        width: '100%',
        shadowOpacity: 0.8,
        shadowColor: 'rgba(8, 5, 49, 0.1)',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 15,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center'
    },
    boxTouchable: {
        height: 64,
        width: '94%',
        marginTop: 6,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 6,
        borderRadius: 16,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#3D6D99',
        marginRight: 16,
        borderRadius: 2
    },
    checkboxChecked: {
        backgroundColor: '#3D6D99',
        alignItems: 'center',
        justifyContent: 'center'
    },
    picture: {
        width: 13,
        height: 11
    },
    desc: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    desc_title: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    textChecked: {
        textDecorationLine: 'line-through',
        color: '#4e555f'
    },
    desc_date: {
        fontWeight: '300',
        color: 'grey',
        fontSize: 18,
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
