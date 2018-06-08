import React, {Component} from 'react'

import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

import TextProps from './prop';
import CoverPage from './CoverPage'

const Navigation = StackNavigator({
    TextProps: {
        screen: TextProps,
        navigationOptions: {
            headerTitle: "测试",
            gesturesEnabled: true
        }

    },
    CoverPage: {
        screen: CoverPage,
        navigationOptions: {
            headerTitle: "封面",
            gesturesEnabled: true
        }
    }
}, {
    mode: 'card',
    headerMode: 'float',
    initialRouteName: 'TextProps',
    initialRouteParams: {
        text: "=.="
    }
});

export default class MainPage extends Component{
    render(){
        return(
            <Navigation/>
        )
    }
};