export const API = {
    getAllBroadbandListSuccess: async () => {
        try {
            const response : Response = await fetch('http://localhost:5000/api/v1/list-all-broadband');
            if(!response.ok) {
                return {
                    message_code: 'ERROR',
                    message: response.statusText
                }
            }
            const combos =  await response.json();
            return {
                message_code: 'SUCCESS',
                message: 'Success',  
                combos: combos
            }
        } catch( error ) {
            return {
                message_code: 'ERROR',
                message: error.toString()
            }
        }      

    }
}