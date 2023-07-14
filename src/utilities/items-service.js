import * as itemsAPI from './items-api';



export async function createItem(itemData) {
    const newItem = await itemsAPI.createItemRequest(itemData);
    return newItem;
  }