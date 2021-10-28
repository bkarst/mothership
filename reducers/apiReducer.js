const apiReducer = (state = {}, action) => {
    // const router = useRouter()
    switch (action.type) {
      case "SWITCH_TO_MESSAGES": {
        return {...state, fetching: true}
      }
      case "SWITCH_TO_BROADCAST": {
        return {...state, fetching: true}
      }
      
    }
}
