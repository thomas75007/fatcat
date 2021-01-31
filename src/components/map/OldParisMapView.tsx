import React from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

import MapView from "react-native-map-clustering";
import { Region, MapStyleElement } from 'react-native-maps';

import { WithChildren } from '../../types'

export const ParisMapView = ({ children }: WithChildren): JSX.Element => {

    const ParisRegion: Region = {
        latitude: 48.856614,
        longitude: 2.342,
        latitudeDelta: 0.13,
        longitudeDelta: 0.13,
    }

    const RetroStyle: Array<MapStyleElement> =
        require("../../../assets/map/retroMapStyle.json");
        
    return (
        <MapView
            style={styles.map}
            initialRegion={ParisRegion}
            loadingEnabled={true}
            customMapStyle={RetroStyle}
            tracksViewChanges={false}

            showsCompass={false}
            showsScale={false}
            showsBuildings={false}
            showsTraffic={false}
            showsIndoors={false}

            //minPoints={2}
            radius={Dimensions.get("window").width * 0.06}
            extent={150}
            //maxZoom={17}
            clusterColor="#197d8e"
        >
            {children}
        </MapView>

    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});