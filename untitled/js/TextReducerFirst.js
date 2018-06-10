var TestKey=1;

function TextReducerFirst(state,action) {
    let textLet=action.test;
    switch (action.key){
        case TestKey:
            return{
                ...state,
                test:textLet+"测试2起作用了"
            };
        default:
            return state;
    }
}

export default TextReducerFirst;