import React from 'react';
import { StyleSheet, Dimensions, Modal, View, Text} from 'react-native';

export default ({children, visibility})=> {
    return (
        <Modal
         animationType='slide'
         transparent={true}
         visible={visibility}
        >
         <View style={styles.center}>
          <View style={styles.modalView}>
            {children}
          </View>
         </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.8)'
      },
      modalView: {
        minWidth: Dimensions.get('window').width - 100,
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 5,
        shadowColor: '#000', // is it only for ios?
        shadowOffset: { // is it only for ios?
          width: 0,
          height: 3,
        }
      },
})