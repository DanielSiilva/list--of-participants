import { Text, View, TextInput, TouchableOpacity} from 'react-native'

import {styles} from './styles'
import { Participant } from '../../components/Participant';



export  function Home(){


  function handleParticipantAdd(){
    console.log('Clicou no botão');
    
  }


  return(
    <View style={styles.container}>
        <Text style={styles.eventName}> 
          Nome do Evento
        </Text>

        <Text style={styles.eventDate}>
          Sabado, 27 de Novembro de 2022
        </Text>

        <View style={styles.form}>
          <TextInput 
              style={styles.input}
              placeholder='Nome do Participante'
              placeholderTextColor= "#6b6b6b"
          />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                  <Text style={styles.buttonText}> + </Text>
          </TouchableOpacity>
        </View>

        <Participant name='Daniel Sousa'/>
        <Participant name='Andreane Cardoso'/>
        <Participant name='Marlene Sousa'/>
     </View>
  )

}