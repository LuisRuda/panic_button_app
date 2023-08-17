import React, {useState} from 'react';
import {
  Button,
  Center,
  FormControl,
  Icon,
  Input,
  Modal,
  Pressable,
  Select,
  Text,
  View,
} from 'native-base';
import Lottie from 'lottie-react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {styles} from './styles';
import {SOSAnimated} from '../../assets/animations';

function HomeScreen() {
  const [service, setService] = useState('EFII');
  const [modalVisible, setModalVisible] = useState(false);
  const [alertStarted, setAlertStarted] = useState(false);

  function handleStartAlert() {
    setModalVisible(false);
    setAlertStarted(true);
  }

  function handleCancelAlert() {
    setAlertStarted(false);
  }

  function handleOpenModal() {
    setModalVisible(true);
  }

  return (
    <Center
      bg="gray.200"
      alignItems="center"
      w="100%"
      h="100%"
      justifyContent="center">
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="lg">
        <Modal.Content maxH="60%" bg="gray.200">
          <Modal.CloseButton />
          <Modal.Header bg="gray.200">Confirme as informações</Modal.Header>
          <Modal.Body>
            <Center>
              <FormControl w="80%">
                <FormControl.Label>Nome</FormControl.Label>
                <Input
                  value="Luis Ruda"
                  InputLeftElement={
                    <Icon
                      as={<FeatherIcon name="user" />}
                      size={5}
                      ml="2"
                      color="blue.500"
                    />
                  }
                  placeholder="Nome"
                  bg="gray.100"
                  h="40px"
                  borderWidth="0"
                />
              </FormControl>
              <FormControl w="80%" mt="2">
                <FormControl.Label>Local</FormControl.Label>
                <Select
                  selectedValue={service}
                  accessibilityLabel="Selecione sua sala"
                  placeholder="Local da ocorrência"
                  _selectedItem={{
                    bg: 'blue.500',
                  }}
                  bg="gray.100"
                  h="40px"
                  borderWidth="0"
                  InputLeftElement={
                    <Icon
                      as={<FeatherIcon name="map-pin" />}
                      size={5}
                      ml="2"
                      color="blue.500"
                    />
                  }
                  dropdownIcon={
                    <Icon
                      as={<FeatherIcon name="chevron-down" />}
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  }
                  onValueChange={itemValue => setService(itemValue)}>
                  <Select.Item label="Jardim I" value="JI" />
                  <Select.Item label="Ensino fundamental I" value="EFI" />
                  <Select.Item label="Ensino fundamental II" value="EFII" />
                  <Select.Item label="Ensino médio" value="EM" />
                  <Select.Item label="Direção" value="D" />
                  <Select.Item label="Secretária" value="S" />
                </Select>
              </FormControl>
              <Button
                mt="8"
                w="80%"
                bg="red.500"
                _text={{fontWeight: 'bold'}}
                onPress={handleStartAlert}>
                ENVIAR SOS
              </Button>
            </Center>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <Center w="100%">
        {alertStarted ? (
          <Pressable onPress={handleCancelAlert}>
            <View style={styles.alertContainer}>
              <Lottie source={SOSAnimated} autoPlay loop />
              <Text color="white" fontSize="3xl" fontWeight="bold">
                Cancelar
              </Text>
            </View>
          </Pressable>
        ) : (
          <Pressable onPress={handleOpenModal}>
            <View style={styles.buttonFirstShadow}>
              <View style={styles.buttonSecondShadow}>
                <View style={styles.buttonContainer}>
                  <Text color="white" fontSize="3xl" fontWeight="bold">
                    SOS
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
      </Center>
    </Center>
  );
}

export default HomeScreen;
