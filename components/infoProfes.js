import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Chip, Card, Provider as PaperProvider } from 'react-native-paper';

const InfoProfes = (props) => {
  const arrayColores = ['#FDE5E5', '#D1F2D1', '#D1F2F0', '#FAF9BA', '#E7D1F2'];
  const [colorFondoIndex, setColorFondoIndex] = useState(0);
  const [mostrarChipProfessor, setMostrarChipProfessor] = useState(false);
  const donarChipActivat = () => {
    setMostrarChipProfessor(!mostrarChipProfessor);
    setColorFondoIndex(props.index);
  };

  const fotoProfessor = () => {
    return (<Avatar.Icon size={40} icon={props.dades.foto} />)
  }

  return (
    <ScrollView contentContainerStyle={styles.contentLlistatProfes}>
      <View style={styles.chip}>
        <Chip icon="human-male-board" onPress={donarChipActivat}>
          {props.dades.nom}
        </Chip>
        {mostrarChipProfessor && (
          <Card mode='outlined' style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            backgroundColor: arrayColores[colorFondoIndex],
          }}>
            <Card.Title titleStyle={styles.title}
              title={props.dades.nom} right={fotoProfessor} />
            <Card.Content>
              <Text style={styles.modul} variant="titleLarge">Modul: {props.dades.modul}</Text>
              <Text style={styles.completModul} variant="bodyMedium">Nom complet modul: {props.dades.nomCompletModul}</Text>
              <Text style={styles.horesSetmanals} variant="bodyMedium">Hores setmanals: {props.dades.horesSetmanals}</Text>
            </Card.Content>
          </Card>
        )
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentLlistatProfes: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  chip: {
    padding: 10,
    marginVertical: 5
  },
  completModul: {
    fontSize: 18,
    fontWeight: '400',
    padding: 2,
    textAlign: 'left'
  },
  horesSetmanals: {
    fontSize: 18,
    fontWeight: '400',
    padding: 3,
    textAlign: 'left'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
  },
  modul: {
    fontSize: 18,
    fontWeight: '400',
    padding: 3,
    textAlign: 'left'
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
});

export default InfoProfes;