import React, {Component} from 'React'
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native'

export default class TagsView extends Component {

    render() {
        let cells = [];
        for (let i = 0; i < this.props.tagsData.size(); i++) {
            let tag = this.props.tagsData[i];
            cells.push(
                <Text style={tagsStyle.tagsCell}>{tag.text}</Text>
            )
        }
        return (
            <View>
                {cells.map((elem, index) => {
                    return elem;
                })}
            </View>
        )
    }
}

const tagsStyle = StyleSheet.create({
    tagsCell: {
        height: 19,
        marginLeft: 7
    }
})