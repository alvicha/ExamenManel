import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import InfoProfes from './infoProfes';

const LlistatProfesCicle = props => {
  return (
    <View style={{ flex: 2, padding: 3 }}>
      {props.cicleSeleccionat !== null ? (
        props.dades.unitatTics[props.cicleSeleccionat].curs[0].profes.map(
          (unModul, index) => {
            return (
              <InfoProfes
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
