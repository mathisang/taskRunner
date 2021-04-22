import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';

export default function ListPosts({userPosts, globalStyles, itemClicked}) {

    return (
        <View style={[globalStyles.containerMax, styles.lastSection]}>
            <View style={styles.boxTodo}>
                <Text style={globalStyles.title}>Articles</Text>
                <Text style={globalStyles.link}>Voir tout</Text>
            </View>
            <View style={globalStyles.shadowBox}>
                <FlatList
                    data={userPosts}
                    scrollEnabled={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => {
                        return <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor="#ddd"
                            style={styles.boxTouchable}
                            onPress={() => itemClicked(item.id, item)}
                            >
                            <View style={styles.main_container}>
                                <View style={styles.desc}>
                                    <Text
                                        style={styles.desc_title}>{item.title}</Text>
                                </View>
                                <View style={styles.arrow}>
                                    <Image style={styles.picture}
                                           resizeMode={'contain'}
                                           source={require('../../assets/arrow.png')} />

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
    lastSection: {
        paddingBottom: 30,
    },
    boxTodo: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    arrow: {
        width: 10,
        marginLeft: 18
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
    desc: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    desc_title: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    desc_date: {
        fontWeight: '300',
        color: 'grey',
        fontSize: 18,
    },
});