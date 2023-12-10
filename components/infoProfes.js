import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Chip, Card, Provider as PaperProvider } from 'react-native-paper';

const InfoProfes = (props) => {
  const [mostrarChipProfessor, setMostrarChipProfessor] = useState(false);
  const donarChipActivat = () => setMostrarChipProfessor(!mostrarChipProfessor);

  const fotoProfessor = () => {
    return (<Avatar.Icon size={36} icon={props.dades.foto} />)
  }

  return (
    <ScrollView contentContainerStyle={styles.contentLlistatProfes}>
      <View style={styles.chip}>
        <Chip icon="information" onPress={donarChipActivat}>
          {props.dades.nom}
        </Chip>
        {mostrarChipProfessor && (
          <Card style={styles.card}>
            <Card.Title style={styles.title} title={props.dades.nom} right={fotoProfessor} />
            <Card.Content>
              <Text style={styles.modul} variant="titleLarge">Modul: {props.dades.modul}</Text>
              <Text variant="bodyMedium">Nom complet modul: {props.dades.nomCompletModul}</Text>
              <Text variant="bodyMedium">Hores setmanals: {props.dades.horesSetmanals}</Text>
            </Card.Content>
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentLlistatProfes: {
    justifyContent: 'space-around', 
    borderColor: 'blue', 
    borderWidth: 3
  },
  chip: {
    padding: 10,
    marginVertical: 5
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  nomProfessor: {
    padding: 20,
    margin: 50,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
});

export default InfoProfes;