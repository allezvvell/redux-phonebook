let initialState = {
    contactList : [],
    searchedName : ''
}

function reduce(state=initialState,action){
    const {type,payload} = action;
    switch(type){
        case 'ADD_CONTACT':
            console.log('add');
           return {
            ...state,
            contactList:[
                ...state.contactList,
                {
                    name:payload.name,
                    phoneNum:payload.phoneNum,
                    id:Math.random()
                }
            ]
        }
        case 'REMOVE_CONTACT':
            console.log('removed');
            return {
                ...state,
                contactList:state.contactList.filter((item) => item.name!==payload.name || item.phoneNum!==payload.phoneNum || item.id!==payload.id)
            }
        case 'SEARCH_NAME':
            return {...state,searchedName:payload.searchedName}
        default :
        return {...state}   
    }
    
}

export default reduce