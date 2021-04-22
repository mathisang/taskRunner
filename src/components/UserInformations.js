import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';

export default function UserInformations({userInfos}) {
    return (
        <View>
            <View style={styles.boxUser}>
                <View style={styles.image}>
                    <Image style={styles.picture}
                           resizeMode={'contain'}
                           source={require('../../assets/user.png')}/>

                </View>
                <Text style={styles.titleName}>{userInfos.name} {userInfos.firstname}</Text>
            </View>

            <View style={styles.boxInformations}>
                <Text style={styles.title}>Informations</Text>
                <View style={styles.box}>
                    <Text style={styles.label}>Entreprise :</Text>
                    <Text style={styles.textInformation}>{userInfos.company}</Text>
                    <Text style={styles.label}>Adresse mail :</Text>
                    <Text style={styles.textInformation}>{userInfos.email}</Text>
                    <Text style={styles.label}>Téléphone :</Text>
                    <Text style={styles.lastTextInformation}>{userInfos.phone}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110,
    },
    picture: {
        width: '100%',
        height: '100%'
    },
    boxUser: {
        alignItems: 'center',
        marginTop: 16
    },
    titleName: {
        color: '#003566',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 12
    },
    boxInformations: {
        marginTop: 22
    },
    title: {
        color: '#020F22',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8
    },
    box: {
        borderWidth: 1,
        borderColor: "#20232a",
        borderRadius: 6,
        padding: 8
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
})
