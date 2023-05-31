import { Text, View, TextInput, TouchableOpacity} from 'react-native'

import {styles} from './styles'
import { Participant } from '../../components/Participant';



export  function Home(){


  function handleParticipantAdd(){
    console.log('Clicou no botão');
    
  }

  function handleParticipantRemove(name: string){
    console.log(`Você deseja remove o ${name}`)
  }


  return(
    <View style={styles.container}>
        <Text style={styles.eventName}> 
          Confra React Native
        </Text>

        <Text style={styles.eventDate}>
          Quarta-feira, 31 de Maio de 2023
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

        <Participant 
           name='Daniel Sousa'
           onRemove={()=>handleParticipantRemove('Daniel')}
        />

    
     </View>
  )

}