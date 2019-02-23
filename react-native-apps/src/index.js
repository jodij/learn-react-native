import { createStackNavigator, createAppContainer } from 'react-navigation';
import ContactList from './screen/contactList/ContactList';
import ContactDetail from './screen/contactDetail/ContactDetail';

const stackNavigator = createStackNavigator({
    list: ContactList,
    detail: ContactDetail
});

const root = createAppContainer(stackNavigator);

export default root;