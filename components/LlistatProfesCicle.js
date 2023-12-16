import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Switch } from 'react-native-paper';
import InfoProfes from './infoProfes'

const LlistatProfesCicle = props => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const isCicleDAM = props.cicleSeleccionat !== null &&
    props.dades.unitatTics[props.cicleSeleccionat].cicle === 'DAM';

  let selectedCursIndex = isCicleDAM ? isSwitchOn ? 1 : 0 : 0;
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const eliminarProfessorLlista = (index) => {
    props.dades.unitatTics[props.cicleSeleccionat].curs[selectedCursIndex].profes.splice(index, 1);
    
    const professor = props.dades.unitatTics[props.cicleSeleccionat].curs[selectedCursIndex].profes[index];
    let nomProfessor = professor.nom;
    const indexProfesor = props.dades.unitatTics[props.cicleSeleccionat].curs[selectedCursIndex].profes.findIndex(
      (prof) => prof.nom === nomProfessor
    );
    if (indexProfesor !== -1) {
      props.dades.unitatTics[props.cicleSeleccionat].curs[selectedCursIndex].profes.splice(indexProfesor, 1);
    }
    props.eliminarDades({ ...props.dades });
  }

  return (
    <View style={{ flex: 2.5, padding: 3, borderColor: 'red' }}>
      {props.cicleSeleccionat !== null ? (
        props.dades.unitatTics[props.cicleSeleccionat].curs[selectedCursIndex].profes.map(
          (unModul, index) => {
            return (
              <InfoProfes
                key={index}
                dades={unModul}
                index={index}
                eliminaProfessorLlista={eliminarProfessorLlista}
              />
            );
          },
        )
      ) : (
        <Text style={{ fontSize: 18, fontWeight: '400' }}>
          Selecciona un cicle. Sempre es visualitzaran els profes de 1r curs
        </Text>
      )}
      {isCicleDAM && (
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
