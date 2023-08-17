import React, {useState} from 'react';
import {
  Avatar,
  Button,
  Center,
  FormControl,
  Heading,
  Icon,
  Input,
  Select,
  Stack,
} from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';

function ProfileScree() {
  const [service, setService] = useState('');

  return (
    <Center bg="gray.200" h="100%" justifyContent="flex-start">
      <Stack space={3} w="100%" alignItems="center" mt="10">
        <Heading my="10">Meu perfil</Heading>
        <Avatar
          size="xl"
          bg="green.500"
          source={{
            uri: 'https://github.com/LuisRuda.png',
          }}
        />
        <FormControl w="80%">
          <FormControl.Label>Nome</FormControl.Label>
          <Input
            InputLeftElement={
              <Icon
                as={<FeatherIcon name="user" />}
                size={5}
                ml="2"
                color="blue.500"
              />
            }
            placeholder="Digite seu nome"
            bg="gray.100"
            h="40px"
            borderWidth="0"
          />
        </FormControl>
        <FormControl w="80%">
          <FormControl.Label>Cargo</FormControl.Label>
          <Input
            InputLeftElement={
              <Icon
                as={<FeatherIcon name="clipboard" />}
                size={5}
                ml="2"
                color="blue.500"
              />
            }
            placeholder="Digite seu cargo"
            bg="gray.100"
            h="40px"
            borderWidth="0"
          />
        </FormControl>
        <FormControl w="80%">
          <FormControl.Label>Local de trabalho</FormControl.Label>
          <Select
            selectedValue={service}
            accessibilityLabel="Selecione sua sala"
            placeholder="Selecione seu local de trabalho"
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
            <Select.Item label="Jardim I" value="ux" />
            <Select.Item label="Ensino fundamental I" value="web" />
            <Select.Item label="Ensino fundamental II" value="cross" />
            <Select.Item label="Ensino médio" value="ui" />
            <Select.Item label="Direção" value="backend" />
            <Select.Item label="Secretária" value="backend" />
          </Select>
        </FormControl>
        <Button mt="6" w="80%" bg="blue.700" _text={{fontWeight: 'bold'}}>
          Salvar
        </Button>
      </Stack>
    </Center>
  );
}

export default ProfileScree;
