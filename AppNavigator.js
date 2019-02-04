import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Home = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        }
    }
);

const Profile = createStackNavigator({
    Profile: {
        screen: ProfileScreen
    }
})

const Drawer = createDrawerNavigator({
    Home,
    Profile
});

const AppNavigator = createAppContainer(Drawer);

export default AppNavigator;