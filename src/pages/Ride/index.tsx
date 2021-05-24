import React, {useState, useEffect} from 'react';
import {Keyboard, View} from 'react-native';

import {
  Container,
  Button,
  ButtonText,
  Title,
  SubTitle,
  Input,
  Spacer,
  AddressList,
  AddressItem,
} from '../../styles';

const Ride = () => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const keyboarDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setVisible(false),
    );

    const keyboarDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      setVisible(true),
    );

    return () => {
      keyboarDidShowListener.remove();
      keyboarDidHideListener.remove();
    };
  }, []);

  return (
    <>
      <View row height={50} justify='flex-start'>
        <View align="flex-end" padding={10} top={20}>
          <SubTitle>Voltar</SubTitle>
        </View>
        <View color='primary'>
          <Title>Corrida</Title>
        </View>
        <View align='flex-end' padding={20}></View>
      </View>

      <View padding={30} justify='flex-start'>
        <View height={90} justify='flex-start'>               
          <Input          
            placeholder='Embarque'            
          />                   
          <Input                  
            placeholder='Destino'            
          />
        </View>
        <View>
          <AddressList
            data={[1,2,3,4,5,6,7,8,9,10]}          
            renderItem={({item, index}) => (
              <AddressItem>
                <SubTitle bold>Futungo de Belas</SubTitle>
                <SubTitle small>Mutamba</SubTitle>
              </AddressItem>
            )}
          />
        </View>
      </View>

      {visible && (
        <View padding={30} justify='flex-end'>
          <Button>
            <ButtonText>Comece a usar</ButtonText>
          </Button>
        </View>
      )}
    </>
  );
};

export default Ride;
