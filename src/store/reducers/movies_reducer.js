export default function appReducer(state={},action){
    switch(action.type){
        case 'MOVIES_LIST':
            return action.payload
        default:
            return state
    }

}