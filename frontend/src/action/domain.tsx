import * as api from '../api' 
import { DomainType } from '../types';

export const getDomainDetails = async (domain : DomainType) => {
    try {
        // call a function that handles api request
        const { data } = await api.getInformation({ domain });

        // Return success response with fetched data
        return { success: true, data: data.data, message: 'Domain Fetched Successfully' }
    } catch (error) {
        // Return failure response with an error message
        return { success: false, data: null, message: 'Error Fetching Domain Details' }
    }
}
