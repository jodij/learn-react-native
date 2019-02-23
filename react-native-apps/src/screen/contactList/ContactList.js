import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import style from './contactList.styles';
import styles from './contactList.styles';

class ContactList extends React.Component {

    static navigationOptions = {
        
    }

    constructor(props){
        super(props);
        this.state = {
            contactsList: [
                {
                    id: 'abc',
                    firstName: 'Jodi',
                    lastName: 'Jonathan',
                    photo: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1'
                },
                {
                    id: 'def',
                    firstName: 'Test',
                    lastName: '1',
                    photo: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1'
                },
            ]
        }
    }

    _renderItem = ({ item }) => (
        <View style={styles.list}>
            <Image 
                source={{uri: item.photo}}
                style={styles.image}
            />
            <Text style={styles.listText}>
                {`${item.firstName} ${item.lastName}`}
            </Text>
        </View>
    );

    _openDetailContact = () => {
        this.props.navigation.navigate('detail');
    }

    render() {
        return (
            <View>
                {/* <TouchableOpacity onPress={this._openDetailContact}>
                    <Text>Go to detail</Text>
                </TouchableOpacity> */}
                <FlatList
                    data={this.state.contactsList}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}
export default ContactList;