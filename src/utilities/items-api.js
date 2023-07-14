import sendRequest from "./send-request";
const BASE_URL = '/api/items';

export function createItemRequest(itemData) {
    const newItem = itemData
    return sendRequest(BASE_URL, 'POST', newItem);
}

// export function getFriendsRequest() {
//   return sendRequest(BASE_URL, 'GET');
// }

// export function getAllUsers() {

//   return sendRequest(BASE_URL);
// }

// export function getUser(id) {
//   return sendRequest(BASE_URL + `/${id}`);
// }