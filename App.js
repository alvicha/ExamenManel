/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native';
import { Avatar, Divider } from 'react-native-paper';
import UnCicle from './components/UnCicle';
import LlistatProfesCicle from './components/LlistatProfesCicle';

const App = () => {
  const [info, setInfo] = useState(require('./utils/dades.json'));
  const [cicleSeleccionat, setCicleSeleccionat] = useState(null);

  const unCicleSeleccionat = posicioElement => {
    console.log('He rebut ' + posicioElement);
    setCicleSeleccionat(posicioElement);
  };
  return (
    <View style={{ flex: 2, borderColor: 'pink', borderWidth: 3 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.sectionTitle}>Unitat TICS</Text>
        <View style={{ flex: 1 }}>
          <ScrollView horizontal={true}>
            {info.unitatTics.map((unCicleTic, index) => {
              return (
                <UnCicle
                  elCicle={unCicleTic}
                  key={index}
                  guardaPosicio={unCicleSeleccionat}
                  cicleSeleccionat={cicleSeleccionat}
                  index={index}
                />
              );
            })}
          </ScrollView>
        </View>
        {console.log(info.unitatTics + '\n' + cicleSeleccionat)}
      </View>
      <Divider style={{ padding: 3 }} horizontalInset={true} bold={true} />

      <LlistatProfesCicle cicleSeleccionat={cicleSeleccionat} dades={info} />
    </View>
  );
};

const styles = StyleSheet.create({
  estilCard: {
    width: Dimensions.get('window').width / 3,
    margin: 5,
    padding: 3,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 9,
  },
  estilCardSeleccionat: {
    width: Dimensions.get('window').width / 3,
    margin: 5,
    padding: 3,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 9,
    backgroundColor: '#9933FF',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
