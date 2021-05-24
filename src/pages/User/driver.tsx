import React, { useState, useEffect } from 'react';
import { Keyboard, View, Text } from  'react-native';

import { Container,
 Button,
 ButtonText,
 Title,
 SubTitle,
 Input,
 Spacer
} from  '../../styles';

const Driver = () => {
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
            <View align='flex-start' height={40} color='info'>
                <Title>Cadastre o seu veículo</Title>
                <SubTitle>Preencha os campos abaixo</SubTitle>
            </View>
            <View justify='flex-start'>
            <Spacer height={50} />
               <Input placeholder='Matricula' />
               <Spacer />
               <Input placeholder='Marca' />
               <Spacer />
               <Input placeholder='Modelo' />
               <Spacer />
               <Input placeholder='Cor' />
               <Spacer height={400}/>
            </View>
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

export default Driver;