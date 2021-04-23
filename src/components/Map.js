import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function Map({users, itemClicked}) {

    return (
        <View style={styles.container}>
            {
                users[1].lat && users[1].lng ? <MapView style={styles.map} showsUserLocation initialRegion={{
                latitude: parseFloat(users[1].lat),
                longitude: parseFloat(users[1].lng),
                    latitudeDelta: 100,
                    longitudeDelta: 100,
            }}>
                {
                users.map((marker, index) => (
                <Marker onPress={()=>{itemClicked(marker.id, marker.username)}}
                    key={index}
                    coordinate={{latitude: parseFloat(marker.lat) , longitude: parseFloat(marker.lng), latitudeDelta: 0.1,
                        longitudeDelta: 0.1}}
                />
                ))}
            </MapView>:null}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
