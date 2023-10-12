import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import GlobalStyle from '../global/styles'
import Colors from '../global/colors'

import ActivityIndicator from './ActivityIndicator'

const Button = ({loading, onPress, text, textColor, Icon, bgColor, Style}) => {
    const Styles = StyleSheet.create({
        button: {
            borderRadius: 100,
            borderWidth: 1.5,
            borderStyle: 'solid',
            borderColor: Colors.mainColor
        }
    })
    return (
        <TouchableOpacity onPress={onPress} style={[Styles.button, GlobalStyle.padding(10, 0, 10, 0), GlobalStyle.width(100), GlobalStyle.flex('row', 'center', 'center'), {backgroundColor: bgColor}, Style]}>
            <Text style={[GlobalStyle.h6, {color: textColor}, Icon && {marginRight: 10}]}>{text}</Text>
            { Icon && (Icon) }
            { loading && (
                <ActivityIndicator color={textColor} style={{position: 'absolute', right: 20}} />
            ) }
        </TouchableOpacity>
    )
}

export default Button