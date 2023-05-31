import {View, TouchableOpacity, Text} from 'react-native'

import {style} from './styles'


export function Participant(){
    
    return(
        <View style={style.container}>
            <Text style={style.name}> 
                Daniel Sousa
            </Text>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}> 
                    - 
                </Text>
            </TouchableOpacity>
        </View>
    )
}