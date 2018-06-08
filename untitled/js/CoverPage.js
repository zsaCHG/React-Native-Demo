import React, {Component} from 'React'
import {View,Image,StyleSheet,TouchableOpacity} from 'react-native'

import TagsView from './TagsView'

export default class CoverPage extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <View style={styleCoverPage.rootView}>
                <View style={styleCoverPage.pageTitle}>
                    <TouchableOpacity onPress={()=>this.backLastPage()} style={styleCoverPage.returnButton}>
                        <Image source={require('../icon_return_black.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.sharePage()} style={styleCoverPage.shareButton}>
                        <Image source={require('../icon_return_black.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styleCoverPage.contentView}>
                    {/*<TagsView tagsData={[]} />*/}
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
        alignItems:'flex-end'
    }
});