import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Provider as PaperProvider } from 'react-native-paper';

const InfoProfes = (props) => {
  const [visible, setVisible] = React.useState(false);
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  nomProfessor: {
    padding: 20,
    margin: 50,
    borderRadius: 10,
  },
  nombre: {
    fontSize: 90,
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