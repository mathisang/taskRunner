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

export const getUserDetailsFromApiAsync = async (id) => {
    if(!id) {
        return;
    }
    try {
        let response = await fetch(
            BASE_URL+ 'users/'+id,
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

export const getUserTodos = async (id) => {
    if(!id) {
        return;
    }
    try {
        let response = await fetch(
            BASE_URL+ 'users/'+id+'/todos',
            {
                "method": "GET"
            }
        );
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}