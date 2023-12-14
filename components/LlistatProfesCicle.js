import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Switch } from 'react-native-paper';
import InfoProfes from './infoProfes'

const LlistatProfesCicle = props => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [index, setIndex] = useState(0);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn)
    if (!isSwitchOn) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  };

  return (
    <View style={{ flex: 2.5, padding: 3, borderColor: 'red' }}>
      {props.cicleSeleccionat !== null ? (
        props.dades.unitatTics[props.cicleSeleccionat].curs[index].profes.map(
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
      {props.cicleSeleccionat !== null &&
        props.dades.unitatTics[props.cicleSeleccionat].cicle === 'DAM' && (
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, fontWeight: '900', marginRight: 5 }}>1r</Text>
            <Switch
              color="red"
              onValueChange={onToggleSwitch}
              value={isSwitchOn}
            />
            <Text style={{ fontSize: 15, fontWeight: '900', marginRight: 5 }}>2n</Text>
          </View>
        )}
    </View>
  );
};

export default LlistatProfesCicle;
