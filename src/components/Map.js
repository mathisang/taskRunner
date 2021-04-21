import * as React from 'react';
// import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map({users}) {

    return (
        <View style={styles.container}>
            {/*<MapView style={styles.map} showsUserLocation initialRegion={{
                latitude: parseFloat(users[1].address.geo.lat),
                longitude: parseFloat(users[1].address.geo.lng),
            }}>
                {
                users.map((marker, index) => (
                <Marker
                    key={index}
                    coordinate={{latitude: parseFloat(marker.address.geo.lat) , longitude: parseFloat(marker.address.geo.lng)}}
                />
                ))}
            </MapView>*/}
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
