import { Text, View } from 'react-native'

import {styles} from './styles'



export  function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}> 
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sabado, 27 de Novembro de 2022
      </Text>
    </View>
  )

}