import TextReducerFirst from "./TextReducerFirst";

var TextKey=0;

function TextReducerSecond(state={},action) {
    let testVar=action.test;
    switch(action.type){
        case TextKey:
            return{
                ...state,
                test: testVar+"测试1起作用了"
            };
        default:
            return state;
    }
}

export default TextReducerSecond;