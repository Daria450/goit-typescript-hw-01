import axios from 'axios';

async function fetchData<DinType>(url: string): Promise<DinType> {
    try {
        const response = await axios.get<DinType>(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching from ${url}: ${error}`);
    }
}