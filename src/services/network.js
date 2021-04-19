const API_KEY = "026890b0945cbc402813edbeb90f0223";
const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const getUsersFromApiAsync = async () => {
    try {
        let response = await fetch(
            BASE_URL+ 'users',
            {
                "method": "GET"
            }
        );
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}