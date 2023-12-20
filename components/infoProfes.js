import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Portal, Dialog, Chip, Button, Card, PaperProvider, Modal, TouchableRipple } from 'react-native-paper';
import ModalInfoProfes from './ModalInfoProfes';

const InfoProfes = (props) => {
  const arrayColores = ['#FDE5E5', '#D1F2D1', '#D1F2F0', '#FAF9BA', '#E7D1F2'];
  const [colorFondoIndex, setColorFondoIndex] = useState(0);
  const [mostrarChipProfessor, setMostrarChipProfessor] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const showModal = () => setModalVisible(true);


  const donarChipActivat = () => {
    setMostrarChipProfessor(!mostrarChipProfessor);
    setColorFondoIndex(props.index);
  };

  const fotoProfessor = () => {
    return (<Avatar.Icon size={40} icon={props.dades.foto} />)
  }

  return (
    <PaperProvider>
      {modalVisible ?
        (<ModalInfoProfes dades={props.dades} modal={modalVisible}/>) :
        (
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
              }}
                onPress={showModal}>
                <Card.Title titleStyle={styles.title}
                  title={props.dades.nom} right={fotoProfessor} />
                <Card.Content style={styles.cardContent}>
                  <Text style={styles.modul} variant="bodyMedium">Modul:
                    <Text style={styles.textModul}>{props.dades.modul}</Text>
                  </Text>
                  <Text style={styles.enunciatCompletModul} variant="bodyMedium">Nom complet modul:
                    <Text style={styles.completModul}>{props.dades.nomCompletModul}</Text>
                  </Text>
                  <Text style={styles.enunciatHoresSetmanals} variant="bodyMedium">Hores setmanals:
                    <Text style={styles.horesSetmanals}>{props.dades.horesSetmanals}</Text>
                  </Text>
                </Card.Content>
              </Card>
            )
            }
          </View>
        )}
    </PaperProvider >
  );
};

const styles = StyleSheet.create({
  cardContent: {
    flex: 1,
    width: 350,
    justifyContent: 'space-between',
  },
  chip: {
    padding: 10,
    marginVertical: 5
  },
  enunciatCompletModul: {
    fontSize: 18,
    fontWeight: '400',
    padding: 2,
    textAlign: 'left'
  },
  completModul: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'left',
    color: 'darkorange'
  },
  infoModul: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoCompletModul: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoHoresSetmanals: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  enunciatHoresSetmanals: {
    fontSize: 18,
    fontWeight: '400',
    padding: 3,
    textAlign: 'left'
  },
  horesSetmanals: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'left',
    color: 'darkorange'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
  },
  modul: {
    fontSize: 18,
    padding: 3,
    textAlign: 'left'
  },
  textModul: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'left',
    color: 'darkorange'
  },
  botoPapelera: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});

export default InfoProfes;