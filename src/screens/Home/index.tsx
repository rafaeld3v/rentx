import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/stack.routes';

import { Car } from '../../components/Car/index';
import Logo from '../../assets/logo.svg';

import { Container, Header, HeaderContent, TotalCars, CarList } from './styles';

type CarDetailsScreenProps = StackNavigationProp<
  RootStackParamList,
  'CarDetails'
>;

export function Home() {
  const navigation = useNavigation<CarDetailsScreenProps>();

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
  };

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="dark" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
