

const Reducer = (state, action) => {
    switch (action.type) {
        case "Set_stories":
            return {
                ...state,
                hits: action.payload.hits,
                nPages: action.payload.nPages,
                isLoading: false
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                hits: state.hits.filter(item => item.objectID !== action.payload.id)
            }

        case "SetInput":
            return {
                ...state,
                query: action.value,


            }
        case "DEC":
            let dpage = state.page - 1
            if (dpage <= 0) {
                dpage = 0
            }
            return {
                ...state,

                page: dpage
            }

        case "INC":
            let epage = state.page + 1;
            if (epage >= state.nPages) {
                epage = 0
            }
            return {
                ...state,
                page: epage
            }
    }


    return state
}

export default Reducer