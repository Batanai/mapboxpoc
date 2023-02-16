import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MapboxGL, {Camera} from '@rnmapbox/maps';

const ACCESS_TOKEN =
  '<sk.eyJ1IjoiYmF0YW5haSIsImEiOiJjbGU0OWRnNjEwMHZoM3BxczdjdnFlZnR5In0.6hSUVQzOGrvz9XWWbYHPjg>';
const PUB_KEY =
  'pk.eyJ1IjoiYmF0YW5haSIsImEiOiJja3NuNWFua2EwYTFoMnBvNjg3a2RmczNwIn0.7yHAoUTYbOhiuFbEd0Mpzw';
const MAPBOX_STYLE = 'batanai/cksn5kqof0klq17pqxhtqeppc';
const MAPBOX_URL = `https://api.mapbox.com/styles/v1/${MAPBOX_STYLE}?access_token=${PUB_KEY}`;
const MAP_TILER =
  'https://api.maptiler.com/maps/streets-v2/style.json?key=0bmvmACoX79xCLUk9D53';
MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(ACCESS_TOKEN);
// MapboxGL.setConnected(true);

function App() {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <MapboxGL.MapView style={styles.map} styleURL={MAP_TILER}>
          <Camera
            centerCoordinate={[-74.00597, 40.71427]}
            zoomLevel={16}
            animationDuration={1000}
            animationMode={'linearTo'}
          />
        </MapboxGL.MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});

export default App;
