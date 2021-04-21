const BASE_URL = "http://vps791823.ovh.net/api/users";

export const getUsersFromApiAsync = async (searchText) => {
    // console.log(searchText, 'from function');
    const searchParam = searchText && searchText.length ? searchText: null;
    try {
        let response = await fetch(
            searchParam ? BASE_URL+ '?firstname='+searchParam :
            BASE_URL,
            {
                "method": "GET",
                "accept": "application/json"
            }
        );
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export const getUserDetails = async (id) => {
    if(!id) {
        return;
    }
    try {
        let response = await fetch(
            'http://vps791823.ovh.net/api/users/'+id,
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