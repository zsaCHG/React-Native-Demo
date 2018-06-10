/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {Provider} from 'react-redux';
import { createStore } from 'redux'

import TextProps from './js/prop'
import CoverPage from './js/CoverPage'
import MainPage from './js/main'
import AppReducer from './js/AllReducer'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
let store=createStore(AppReducer);
export default class App extends Component<Props> {
    render() {
        let url = {uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"};
        return (
            <Provider store={store}><MainPage/></Provider>
        )
    }
}

