import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FacturaElectronica = () => {
  return (
    <View style={styles.buttonsContainer}>
      <Button
        buttonStyle={{
          backgroundColor: 'transparet',
          borderRadius: 5,
          borderColor: '#d9d9d9',
          borderWidth: 1,
          height: 90,
          width: 90,
          marginRight: 15
        }}
        containerStyle={{}}
      >
        <View flexDirection='colum'>
          <View style={styles.view}>
            <Icon
              name='map'
              size={20}
              color='black'
              padding={5}
              justifyContent='center'
              alignItems='center'
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.text}>Mapa de</Text>
            <Text style={styles.text}>Cortes</Text>
          </View>
        </View>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEB81',
    width: 50, // Cambia este valor para ajustar el tamaño del círculo
    height: 50, // Mismo valor que el width para hacerlo un círculo perfecto
    borderRadius: 50
  },
  viewText: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'colum'
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Helvetica-Bold',
    fontSize: 9
  }
});

export default FacturaElectronica;
