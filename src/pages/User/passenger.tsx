import React, { useEffect, useState } from 'react';
import { Keyboard, Text, View } from  'react-native';

import { CreditCardInput } from 'react-native-credit-card-input';

import { Container,
 Button,
 ButtonText,
 Title,
 SubTitle,
 Spacer,
} from  '../../styles';

const Passenger = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardeDidShow',
             () => setVisible(false),
             );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardeDidHide',
             () => setVisible(true),
             );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        }     
    }, [])
    return(
      <View padding={30} justify='flex-start'>
            <View align='flex-start' height={40} color='light'>
                <Title>Escolha como pagar</Title>
                <SubTitle>Preencha com os dados do Cartão de crédito</SubTitle>
            </View>
            <Spacer height={50}/>
            <View >
              <CreditCardInput  requiresName/>
            </View>
            <Spacer height={290}/>
            {visible &&(
            <View height={70} justify='flex-end'>
                <Button>
                    <ButtonText>Comece a usar</ButtonText>
                </Button>
            </View>
            )}
        </View>
    )
} 

export default Passenger;