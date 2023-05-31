import {View, TouchableOpacity, Text} from 'react-native'

import {style} from './styles'

interface ParticipantProps {
    name: string
}


export function Participant({name}: ParticipantProps){

    return(
        <View style={style.container}>
            <Text style={style.name}> 
                {name}
            </Text>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}> 
                    - 
                </Text>
            </TouchableOpacity>
        </View>
    )
}