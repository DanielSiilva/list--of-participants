import { Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native'

import {styles} from './styles'
import { Participant } from '../../components/Participant';



export  function Home(){

  const participants = [ 'Daniel', 'Marlene', 'Ivaldo', 'Andreane', 'Maiza', 'Aline', 'Lorena', 'Denilson', 'Mae', 'Pai']


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
        
        <ScrollView showsVerticalScrollIndicator={false}>
          { 
            participants.map((item) =>{
              return <Participant 
                        name={item} 
                        onRemove={()=> handleParticipantRemove(item)}
                      />
            })
          }
        </ScrollView>
        
     </View>
  )

}