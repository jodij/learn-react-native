import { createStackNavigator, createAppContainer } from 'react-navigation';
import ContactList from './screen/contactList/ContactList';
import ContactDetail from './screen/contactDetail/ContactDetail';

const stackConfig = {
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#64b5f6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
}

const stackNavigator = createStackNavigator({
    list: ContactList,
    detail: ContactDetail
}, stackConfig);

const root = createAppContainer(stackNavigator);

export default root;