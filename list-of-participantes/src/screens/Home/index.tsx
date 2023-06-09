import {useState} from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native'

import {styles} from './styles'
import { Participant } from '../../components/Participant';



export  function Home(){

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName]= useState('')


  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert('Partipante Existe', 'Já existe um participante na lista com esse nome')
    }
    
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
    
  }

  function handleParticipantRemove(name: string){
    


    Alert.alert('Remover', `Deseja remover o participante? ${name}`,[
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

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
              onChangeText={setParticipantName}
              value={participantName}
          />

          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                  <Text style={styles.buttonText}> + </Text>
          </TouchableOpacity>
        </View>

        <FlatList 
          keyExtractor={(item) => item}
          data={participants}
          renderItem={({ item }) => (
            <Participant 
              key={item} 
              name={item} 
              onRemove={() => handleParticipantRemove(item)} 
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=>(
            <Text style={styles.listEmptyText}> Lista Vazia? Adicione participantes</Text>
          )}  
        /> 
     </View>
  )

}