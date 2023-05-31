import {View, TouchableOpacity, Text} from 'react-native'

import {style} from './styles'

interface ParticipantProps {
    name: string 
    onRemove: () => void
}


export function Participant({name, onRemove}: ParticipantProps){

    return(
        <View style={style.container}>
            <Text style={style.name}> 
                {name}
            </Text>
            <TouchableOpacity 
                style={style.button}
                onPress={onRemove}
            >
                <Text style={style.buttonText}> 
                    - 
                </Text>
            </TouchableOpacity>
        </View>
    )
}