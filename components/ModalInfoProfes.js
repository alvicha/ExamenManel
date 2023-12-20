import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Switch, TextInput, Portal, Modal } from 'react-native-paper';


const ModalInfoProfes = props => {
    const [modalVisible, setModalVisible] = React.useState(props.modalVisible);
    const hideModal = () => setModalVisible(false);
    const showModal = () => setModalVisible(true);
    const containerStyle = { backgroundColor: 'white', padding: 120 };

    return (
        <Portal>
            <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <View style={{ flex: 1, borderColor: 'red', borderWidth: 3 }}>
                    <Text>Editació Profes</Text>
                    <View style={styles.contentDades}>
                        <View style={styles.textInputPeso}>
                            <TextInput
                                style={styles.resultat}
                                label="Nom professor"
                                //onChangeText={(text) => handlePesChange(text)}
                                value={props.dades.nom}
                                mode='outlined'
                                outlineColor='green'
                            />
                        </View>
                        <View style={styles.textInputAltura}>
                            <TextInput
                                style={styles.resultat}
                                value={props.dades.modul}
                                label="Modul"
                                //onChangeText={(text) => handleAlçadaChange(text)}
                                mode='outlined'
                                outlineColor='orange'
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    contentLlistatProfes: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    textInputPeso: {
        textAlign: 'left',
        width: 160,
    },
    textInputAltura: {
        justifyContent: 'flex-start',
        width: 160,
    },
    contentDades: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 9,
    }
});

export default ModalInfoProfes;
