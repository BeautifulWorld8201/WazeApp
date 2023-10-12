import { View } from 'react-native'
import {MaterialIndicator} from 'react-native-indicators'

import Colors from '../global/colors'

const ActivityIndicator = ({style, color = Colors.green, size = 20}) => {
    return (
        <View style={[style]}>
            <MaterialIndicator color={color} size={size} />
        </View>
    )
}

export default ActivityIndicator