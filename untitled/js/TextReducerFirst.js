var TestKey=1;

function TextReducerFirst(state={},action) {

    let textLet=action.test;
    switch (action.type){
        case TestKey:
            return{
                ...state,
                test:textLet+"测试2起作用了"
            };
        default:
            return state;
    }
}

export const firstReducer=()=>({
    type:0,
    test:"测试测试"
});

export default TextReducerFirst;