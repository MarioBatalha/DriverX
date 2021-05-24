import React from 'react';
import { Text, Image, View } from  'react-native';

import { Container, Button, ButtonText, Title, SubTitle, PickerButton } from  '../../styles';

import car from '../../assets/car.png';
import hand from '../../assets/hand.png'; 


const Type = () => {
    return(
        <View padding={30} justify='flex-start'>
            <View align='flex-start' height={40} color='light'>
                <Title>Passageiro ou Motorista?</Title>
                <SubTitle>Selecione qual a sua função no DriverX</SubTitle>
            </View>
            <View >
                <PickerButton >                            
                  <Image source={car} />
                  <Title>Motorista</Title>
                </PickerButton>
                <PickerButton>
                    <Image source={hand} />
                    <Title>Passageiro</Title>
                </PickerButton>
            </View>
            <View height={70} justify='flex-end'>
                <Button>
                    <ButtonText>Próximo passo</ButtonText>
                </Button>
            </View>
        </View>
    )
} 

export default Type;