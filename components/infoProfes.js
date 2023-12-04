import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const InfoProfes = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.contingut}>
                <View style={styles.nomProfessor}>
                    <Text style={styles.nombre}>{props.dades.nom}</Text>
                    <Avatar.Icon size={36} icon={props.dades.foto} />
                </View>
                <View style={styles.description}>
                    <Text style={styles.text}>{props.dades.modul}</Text>
                    <Text style={styles.text}>{props.dades.nomCompletModul}</Text>
                    <Text style={styles.text}>{props.dades.horesSetmanals}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        marginTop: 30,
    },
    contingut: {
        marginBottom: 18,
        alignItems: 'center',
    },
    infoModuls: {
    },
    description: {
        borderColor: 'blue',
        borderWidth: 2
    },
    nomProfessor: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around',
        borderColor: 'blue',
        borderWidth: 3
    },
    nombre: {
        fontSize: 24,
        fontWeight: '400',
        marginLeft: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 5,
    },
});

export default InfoProfes;