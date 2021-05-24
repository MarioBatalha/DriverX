import React from 'react';
import { View , TouchableOpacity } from 'react-native';

import { PROVIDER_GOOGLE } from 'react-native-maps';
import {} from 'react-native-pulse';

import Man from '../../assets/man.jpg';

import { Container,
 Title,
 SubTitle,
 Spacer,
 Map,
 Avatar,
 Input,
 Button,
 ButtonText,
 VerticalSeparator,
 Bullet,
 PulseCircle,
} from  '../../styles';

const Home = () => {
   
    const type = 'driver'; //passanger, driver
    const status = 'R';//WR = WITHOUT RIDE, R = RIDE, I = INFORMATION, S = SEARCH 

    return (
        <View>
            <Map 
            provider='PROVIDER_GOOGLE'
            initialRegion={{
            latitude: -30.011364,
            longitude: -511637373,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}

            disabled={ status === 'S' }
            />   
            <View position='absolute' justify='space-between' align='flex-start' padding={20} zIndex={999} pointerEvents='box-none' style={{ height: '100%' }}>
            {/* PARTE SUPERIOR*/}
            <View height={100} justify='flex-start' align='flex-start'>
            {/* AVATAR */}
             {status === 'WR' || (type === 'driver' && (
              <TouchableOpacity>
                <Avatar source={Man} />
              </TouchableOpacity>
             ))}  

              {status !== 'WR' &&  type === 'passenger' && (
                <View elevation={50} justify='flex-end' color='light'>
                  <View padding={20}>
                    <View justify='flex-start' row>
                      <Bullet />
                      <SubTitle> Endereço de embarque</SubTitle>
                    </View>
                    <Spacer height={20} />
                    <View justify='flex-start' row>
                      <Bullet destination />
                      <SubTitle> Endereço de destino</SubTitle>
                    </View>
                  </View>
                  <Button type='dark' compact>
                    <ButtonText color='light'>Toque para editar</ButtonText>
                  </Button>                  
                </View>
              )}      
            </View> 

            {/* PASSAGEIRO PROCURANDO CORRIDA */}
            {status === 'S' && type === 'passenger' && ( <View padding={20} zIndex={-1} >
              <PulseCircle 
              numPulses={3}
              diameter={400}
              speed={20}
              duration={2000}
              />
            </View>
            )}
            
            <View elevation={50} height={150} color='light'>
            {/* PASSAGEIRO SEM CORRIDA */}
             {type === 'passenger' && status === 'WR' && (
              <View justify='flex-start' padding={20} align='flex-start'>
                <SubTitle>Olá, Mário Batalha</SubTitle>
                <Title>Para onde deseja ir?</Title>
                <Spacer />
                <Input placeholder='Procure um destino...' />
              </View>
              )}

            {/* PASSAGEIRO INFORMAÇOES DA CORRIDA */}  
               {type === 'passenger' && (status === 'I' || status === 'S') && (
              <View justify='flex-end' align='flex-start'>
                <View padding={20}>
                 <SubTitle>DriverX convecional</SubTitle>
                 <Spacer />
                 <View row>
                   <View>
                     <Title>AOA$ 1.500,00</Title>
                   </View>
                   <VerticalSeparator />
                   <View>
                     <Title>5 min.</Title>
                   </View>
                 </View>
                </View>
                 <Button type={status === 'S' ? 'muted' : 'primary'}>
                    <ButtonText>{status === 'S' ? 'Cancelar DriverX' : 'Chamar DriverX'}</ButtonText>
                  </Button>
              </View>
              )}            
            
            {/* PASSAGEIRO EM CORRIDA */}
            {type === 'passenger' && status  === 'R' && (
              <View border='primary' justify='flex-end' align='flex-start'>
              <View row padding={20}>
                <View align='flex-start' row>
                  <Avatar 
                  small
                  source={Man}
                  />
                  <Spacer width='10px' />
                 
                    <View align='flex-start'>
                      <SubTitle bold>Ricardo Rafael</SubTitle>
                      <SubTitle small>ABC-123-334, Mercedes-Benz, Preta</SubTitle>
                    </View>
                  </View>
                  <VerticalSeparator />
                  <View padding={5} width={120}>
                    <Title>AOA$ 3.000,00</Title>
                    <SubTitle bold color='primary'>Aprox. 15 min.</SubTitle>
                  </View>             
                 </View>
              <Button type='muted'>
                <ButtonText>Cancelar corrida</ButtonText>
              </Button>
            </View>)}

            {/* MOTORISTA EM CORRIDA */}
            {type === 'driver' && status === 'R' (
               <View border='primary' justify='flex-end' align='flex-start'>
                <View row padding={20}>
                <View align='flex-start' row>
                  <Avatar 
                  small
                  source={Man}
                  />
                  <Spacer width='10px' />
                 
                    <View align='flex-start'>
                      <View justify='flex-start' height={20} row>
                        <Bullet />
                        <SubTitle small numberOfLines={1}>{' '} Endereço de embarque</SubTitle>
                      </View>
                    <View justify='flex-start' height={20} row>
                      <Bullet destination />
                      <SubTitle small numberOfLines={1}>{' '} Endereço de destino</SubTitle>
                    </View>
                  </View>
                  <Spacer width='10px' />
                  </View>
                  <VerticalSeparator />
                  <View padding={5} width={100}>
                    <Title small>AOA$ 3.000,00</Title>
                    <SubTitle bold small color='primary'>Aprox. 15 min.</SubTitle>
                  </View>             
                 </View>
              <Button type='primary'>
                <ButtonText>Aceitar a corrida</ButtonText>
              </Button>
            </View>)}
            )}
                        
            {/* MOTORISTA SEM CORRIDA */}
              {type === 'driver' && status === 'WR' &&(
                <View>
                  <SubTitle>Olá, Ricardo Rafael</SubTitle>
                  <Title>Nenhuma corrida encontrada.</Title>
                </View>
              )}
            </View>    
          </View>                     
        </View>
    )
}

export default Home;