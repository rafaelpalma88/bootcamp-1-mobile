import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
//import api from './services/api';
import axios from 'axios';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //api.get('projects') nao esta funcionando...
    axios.get('http://localhost:3333/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await axios.post('http://localhost:3333/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Diego Fernandes',
    });
    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item}) => (
            <Text style={styles.project}>{item.title}</Text>
          )}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
