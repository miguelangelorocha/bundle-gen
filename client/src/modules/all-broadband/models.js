// Models

export interface Bundle { 

    _id: string;
    name: string;
    type: string;
    price: double;
}

export interface Combo { 
    price:  double;
    bundles: Bundle[];
}

// State
export interface AllBroadbandState {   
    combos: Combo[];  
}

// Request and Result messages
export interface Result { 
    message_code:  string | null; // SUCCESS, ERROR or EXCEPTION
    message: string | null;
}

// Actions
export interface GetAllBroadbandListSuccess extends Result { 
    combos:  Combo[];
}