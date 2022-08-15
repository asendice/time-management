import { useState } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const EventModal = ({ modalActive, setModalActive, createEvent }) => {
  const [input, setInput] = useState('');
  const [textError, setTextError] = useState('');

  const onCreateEventPress = () => {
    setTextError('');
    if (input.length > 0) {
      createEvent(input);
      setModalActive(false);
      setInput('');
      return;
    }
    setTextError('Please provide context;');
  };

  const handleClosePress = () => {
    setInput('');
    setModalActive(false);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalActive}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalActive);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeModal}
              onPress={() => handleClosePress()}
            >
              <MaterialCommunityIcons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalText}>What events took place? </Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.input}
                multiline
                numberOfLines={7}
                onChangeText={(text) => setInput(text)}
                value={input}
                placeholder="Provide context: "
              />
            </View>
            {textError ? <Text>{textError}</Text> : null}
            <TouchableOpacity
              style={styles.createButton}
              onPress={() => onCreateEventPress()}
            >
              <Text>Create Event</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 35,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 500,
    width: 370,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: '500',
    color: '#333',
  },
  textInputContainer: {
    height: '70%',
    width: '100%',
  },
  input: {
    marginTop: 10,
  },
  createButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  closeModal: {
    alignSelf: 'flex-end',
    fontSize: 24,
  },
});

export default EventModal;
