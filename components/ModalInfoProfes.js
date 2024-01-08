import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Portal, Modal } from 'react-native-paper';

const ModalInfoProfes = (props) => {
    const [modalVisible, setModalVisible] = useState(props.modal);
    const hideModal = () => {
        setModalVisible(false)
        props.hideModal();
    };
    const containerStyle = { backgroundColor: 'red', padding: 16 };

    return (
        <Portal>
            <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <View style={{ flex: 1 }}>
                    <Text>Editación Profes</Text>
                    <View style={styles.contentDades}>
                        <View style={styles.textInputPeso}>
                            <TextInput
                                style={styles.resultat}
                                label="Nom professor"
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
    contentDades: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 9,
    },
    textInputPeso: {
        textAlign: 'left',
        width: 160,
    },
    textInputAltura: {
        justifyContent: 'flex-start',
        width: 160,
    },
});

export default ModalInfoProfes;