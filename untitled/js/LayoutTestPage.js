import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class LayoutTestPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.heightCell}/>
                <View style={styles.heightCell}/>
                <View style={styles.flexCell}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        position:'absolute',
        top:10,
        left:10,
        bottom:10,
        right:10
    },
    flexCell:{
        flex:1,
        backgroundColor:'black'
    },
    heightCell:{
        height:50
    }
});

//1 组件的父布局需要设置flex，如果没有设置，子布局设置了flex也不会显示
//2 同时设置了 flex 和 宽高 ， 宽高会失效
//3 子布局的 flex 好使得话，父布局必须使用flex
//4 absolute 相对布局 必须设置宽和高 设置flex无效
//5 absolute 是脱离文档流的 所以不能使用flex 设置沾满 父布局 要使用确定的宽高
//  如果只设置了高度 那么高度就是固定的 宽度是不确定的 高度上设置flex 就是好使得 宽度必须设置确定的值
//  如果只设置了宽度 同理 宽度是固定的 宽度上使用flex 好使 高度设置确定的值
//
