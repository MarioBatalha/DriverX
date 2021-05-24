import React from 'react';
import { View, Image } from 'react-native';

import logo from '../../assets/logo.png';
import bgBottom from '../../assets/bg-bottom-login.png';

import {Container, Button, ButtonText} from '../../styles';

import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
    return (
    <Container color='info50' justify='flex-end'>
      <Container
        color='light'
        justify='space-around'
        padding={30}
        position='absolute'
        height={270}
        top={0}
        zIndex={9}>
        <Image source={logo} />
              
          <Icon.Button              
              name='facebook'              
              onPress={() => alert('Login with Facebook')}>
              Fazer Login com a conta Facebook
          </Icon.Button>

          <Icon.Button              
              name='google'         
              backgroundColor='#EA4335'     
              onPress={() => alert('Login with Google')}>
              Fazer Login com a conta Google
          </Icon.Button>
       
          </Container>
      <View top={400}>
        <Image source={bgBottom} />
      </View>
    </Container>
  );
};

export default Login;
