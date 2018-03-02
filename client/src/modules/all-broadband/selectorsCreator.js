import { 
    AllBroadbandState ,
    Combo
} from './models';

function getReducer (state) : AllBroadbandState {
    return state.allBroadbandReducer;
}

export const selectorsCreator = {

    getCombos : (state)  : Combo[] =>  {
        return getReducer(state).combos;
    }

}