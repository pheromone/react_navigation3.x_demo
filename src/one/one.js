/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class One extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '首页',
        headerStyle:{backgroundColor:'red'},
        headerTintColor: 'white',
    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions} onPress={()=>this.pushAction()}>push</Text>
            </View>
        );
    }

    pushAction =() =>{
        this.props.navigation.navigate('OneDetails', { name: 'XXX' ,age:25})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
