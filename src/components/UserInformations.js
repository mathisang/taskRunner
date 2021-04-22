import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import {COLORS} from "../global-styles/colors";

export default function UserInformations({userInfos, globalStyles}) {
    return (
        <View style={globalStyles.containerMax}>
            <View style={styles.boxUser}>
                <View style={styles.image}>
                    <Image style={styles.picture}
                           resizeMode={'contain'}
                           source={require('../../assets/user.png')}/>

                </View>
                <Text style={styles.titleName}>{userInfos.name} {userInfos.firstname}</Text>
            </View>

            <View style={styles.boxInformations}>
                <Text style={globalStyles.title}>Informations</Text>
                <View style={[styles.box, globalStyles.shadowBox]}>
                    <Text style={globalStyles.label}>Entreprise :</Text>
                    <Text style={globalStyles.textInformation}>{userInfos.company}</Text>
                    <Text style={globalStyles.label}>Adresse mail :</Text>
                    <Text style={globalStyles.textInformation}>{userInfos.email}</Text>
                    <Text style={globalStyles.label}>Téléphone :</Text>
                    <Text style={globalStyles.lastTextInformation}>{userInfos.phone}</Text>
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
        marginTop: 25,
    },
    box: {
        padding: 10
    }
})
