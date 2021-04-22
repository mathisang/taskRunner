import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {useEffect} from "react";

export default function SingleMap({userLat, userLng, globalStyles}) {
    return (
        <View style={[globalStyles.containerMax, styles.mapBox]}>
            <Text style={globalStyles.title}>Géolocalisation</Text>
            { userLng && userLat ?
            <MapView style={[styles.map, globalStyles.shadowBox]} region={{
                latitude: parseFloat(userLat),
                longitude: parseFloat(userLng),
                latitudeDelta: 10,
                longitudeDelta: 10,
            }}>
                <Marker
                    key={1}
                    coordinate={{latitude: parseFloat(userLat), longitude: parseFloat(userLng)}}
                />
            </MapView>:null}
        </View>
    )
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 200,
    },
    mapBox: {
        marginTop: 25
    }
});
