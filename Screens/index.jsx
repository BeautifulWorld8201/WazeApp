import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

import SplashScreen from './SplashScreen'
import MainScreen from './HomeScreen'

import ReportScreen from './Report'
import ReportDetailScreen from './Report/DetailScreen'
import ReportCheckhOutScreen from './Report/CheckOutScreen'

import InviteScreen from './InviteFriend'
import FeedbackScreen from './FeedbackScreen'

const ScreenOptions = { 
    headerShown: false
}
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen name="Main" component={MainScreen} options={ScreenOptions} />

            <Drawer.Screen name="Report" component={ReportScreen} options={ScreenOptions} />
            <Drawer.Screen name="ReportDetail" component={ReportDetailScreen} options={ScreenOptions} />
            <Drawer.Screen name="ReportCheckOut" component={ReportCheckhOutScreen} options={ScreenOptions} />

            <Drawer.Screen name="InviteFriend" component={InviteScreen} options={ScreenOptions} />
            <Drawer.Screen name="Feedback" component={FeedbackScreen} options={ScreenOptions} />
        </Drawer.Navigator>
    )
}

const Routes = () => {

    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={ScreenOptions} />
            <Stack.Screen name="Home" component={DrawerNavigator} options={ScreenOptions} />
        </Stack.Navigator>
    )
}

export default Routes