const BASE_URL = "http://jsonplaceholder.typicode.com/";

export const getUsersFromApiAsync = async (searchText) => {
    console.log(searchText, 'from function');
    const searchParam = searchText && searchText.length ? searchText: null;
    try {
        let response = await fetch(
            searchParam ? BASE_URL+ 'users?username='+searchParam :
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

export const getUserInfosFromApiAsync = async (id) => {
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
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const getUserAlbums = async (id) => {
    if(!id) {
        return;
    }
    try {
        let response = await fetch(
            BASE_URL+ 'users/'+id+'/albums',
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

export const getUserPosts = async (id) => {
    if(!id) {
        return;
    }
    try {
        let response = await fetch(
            BASE_URL+ 'users/'+id+'/posts',
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