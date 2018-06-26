import React, {Component} from 'React'
import {View,Image,StyleSheet,TouchableOpacity,Text} from 'react-native'
import {connect} from 'react-redux'
import {firstReducer} from './TextReducerFirst'

import CoverPageTagsView from './CoverPageTagsView'

class CoverPage extends Component{

    constructor(props){
        super(props);

    }

    render(){
        console.log(this.props.first);
        return (
            <View style={styleCoverPage.rootView}>
                <View style={styleCoverPage.pageTitle}>
                    <TouchableOpacity onPress={()=>this.props.firstReducer()} style={styleCoverPage.returnButton}>
                        <Image source={require('../icon_return_black.png')}/>
                    </TouchableOpacity>
                    <Text style={{backgroundColor:'red',fontSize:30,color:'blue'}}>{this.props.first}</Text>
                    <TouchableOpacity onPress={()=>this.sharePage()} style={styleCoverPage.shareButton}>
                        <Text>{this.props.first}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styleCoverPage.contentView}>
                    <Text>{this.props.first}</Text>
                </View>
            </View>
        );
    }

    componentDidMount(){
        let serverUrl="";
        this.getCoverDataFromServer(serverUrl);
    }

    getCoverDataFromServer(url){

    }

    backLastPage(){

    }

    sharePage(){

    }




}

const mapToState=(state)=>{
    console.log(state.TextReducerSecond.test);
    return{
        first:state.TextReducerSecond.test
    }
}

const dispatchToState={
    firstReducer
}

export default connect(mapToState,dispatchToState)(CoverPage);

const styleCoverPage=StyleSheet.create({
    rootView:{
        backgroundColor:"blue"
    },
    pageTitle:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"black"
    },
    returnButton:{
        marginLeft:16
    },
    shareButton:{
        marginRight:16
    },
    contentView:{
        flex:1,
        flexDirection:'column',
        backgroundColor:"red"
    }
});