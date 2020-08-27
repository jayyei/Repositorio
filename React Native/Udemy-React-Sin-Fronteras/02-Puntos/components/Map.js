import React from 'react';
import  MapView, {Marker}  from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export default ({onLongPress, puntos, pointsFilter})=> {
    return (
        <MapView 
         onLongPress={onLongPress}
         style={styles.map}>
            {!pointsFilter? puntos.map((x, i)=>
                    <Marker
                        key={x.name.concat(String(i))}
                        coordinate={x.coordinate}
                        title={x.name}
                    />
                 ): <></>
                }
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: Dimensions.get('window').height - 150,
        width: Dimensions.get('window').width,
      },
})