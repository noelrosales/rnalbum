import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import UserCard from '../components/UserCard';
import axios from 'axios';

class HomeScreen extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users')
            .then(
                res => {
                    this.setState({
                        users: res.data
                    })
                }
            )
    }

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    }
   
    render() { 
        return (
            <ScrollView style={{padding: 10}}>
                {
                    this.state.users.map( user => <UserCard key={user.id} user={user}/>)
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default HomeScreen;