import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';
import InfoProfes from './infoProfes'

const LlistatProfesCicle = props => {
  return (
    <View style={{ flex: 2.5, padding: 3, borderColor: 'white' }}>
      {props.cicleSeleccionat !== null ? (
        props.dades.unitatTics[props.cicleSeleccionat].curs[0].profes.map(
          (unModul, index) => {
            return (
              <InfoProfes
                key={index}
                dades={unModul}
                index={index}
              />
            );
          },
        )
      ) : (
        <Text style={{ fontSize: 18, fontWeight: '400' }}>
          Selecciona un cicle. Sempre es visualitzaran els profes de 1r curs
        </Text>
      )}
    </View>
  );
};

export default LlistatProfesCicle;
