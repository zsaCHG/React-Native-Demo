import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, ScrollView, FlatList, SectionList, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {firstReducer} from'./TextReducerFirst'


class TextProps extends Component {

    constructor(props) {
        super(props);
        this.state = {isShow: true, test: "", section: []};
        setInterval(() => {
                this.setState(previousState => {
                    return {isShow: !previousState.isShow}
                });
            }
            , 1000);
    }


    render() {
        let isShow = this.state.isShow ? this.props.text : "";
        const {navigate} = this.props.navigation;
        const {sendAction,redux1} = this.props;
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text style={[sytleText.textSize, sytleText.textStyle]}>{redux1}</Text>
                <Text style={sytleText.textSize}>{this.state.test}</Text>
                <View style={sytleText.textSize}>
                    <TextInput
                        style={{
                            width: 200
                        }}
                        placeholder="input some text"
                        onChangeText={(test) => {
                            this.setState({test});
                        }}/>
                </View>
                <ScrollView style={sytleText.textSize}>
                    <Text style={[sytleText.textSize, sytleText.textStyle]}>{isShow}</Text>
                    <Text style={[sytleText.textSize, sytleText.textStyle]}>{isShow}</Text>
                    <Text style={[sytleText.textSize, sytleText.textStyle]}>{isShow}</Text>
                    <Text style={[sytleText.textSize, sytleText.textStyle]}>{isShow}</Text>
                    <Text style={[sytleText.textSize, sytleText.textStyle]}>{isShow}</Text>
                    <Text style={[sytleText.textSize, sytleText.textStyle]}>{isShow}</Text>
                    <Text style={[sytleText.textSize, sytleText.textStyle]}>{isShow}</Text>
                    <Text style={[sytleText.textSize, sytleText.textStyle]}>{isShow}</Text>
                    <Text style={[sytleText.textSize, sytleText.textStyle]}>{isShow}</Text>
                </ScrollView>
                <FlatList data={this.state.section}
                          renderItem={({item}) => <Text>{item.title}</Text>}/>
                <TouchableHighlight style={sytleText.textSize}
                                    onPress={()=>{navigate("CoverPage", {})}}><Text>点击跳转</Text></TouchableHighlight>
                <TouchableHighlight style={sytleText.textSize}
                                    onPress={()=>{this.props.firstReducer()}}><Text>点击使用Redux</Text></TouchableHighlight>
            </View>
        );
    }

    componentDidMount() {
        this.getNetData();
    }



    getNetData() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                let section = responseJson.movies;
                this.setState(() => {
                    return {section: section}
                });
                return responseJson.title;
            })
            .catch((error) => {
                console.error(error);
            });
    }


}


const sytleText = StyleSheet.create({
    textStyle: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 10,
        width: 50,
        height: 50,
        alignContent: 'center'
    },
    textSize: {flex: 1}

});

const mapStateToProps=(state)=>{
    console.log(state.test);
    return {
        redux1:state.TextReducerSecond.test
    }

}

const mapDispatchToProps={
    firstReducer
}

export default connect(mapStateToProps,mapDispatchToProps)(TextProps);

