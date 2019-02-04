import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserCard = ({user}) => {
    return (
        <TouchableOpacity 
            style={style.card}
            onPress = { () => alert(user.login)}
        >
            <Image 
                source={{uri: user.avatar_url}} 
                style={style.image}
            />
            <Text>{user.login}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    card: {
        borderWidth: 3,
        borderRadius: 3,
        borderColor: '#000',
        flex: 1,
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 50, 
        width: 50,
        marginRight: 10
    },
    username: {
        
    }
})
 
export default UserCard;