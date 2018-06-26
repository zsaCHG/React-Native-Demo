import React, {Component} from 'react'

import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

import TextProps from './prop';
import CoverPage from './CoverPage'
import LayoutTestPage from "./LayoutTestPage";

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
    },
    LayoutTestPage:{
        screen:LayoutTestPage,
        navigationOptions:{
            headerTitle: "测试布局",
            gesturesEnabled: true
        }
    }
}, {
    mode: 'card',
    headerMode: 'float',
    initialRouteName: 'LayoutTestPage',
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