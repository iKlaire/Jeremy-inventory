import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.135:3000/api',
  timeout: 5000
});

//= ========================
// Users API
//= ========================

export const listItems = () => {
  return instance.get('/item/items').then((res) => {
    return res;
  }).catch((error) => {
  });
}

export const getItemByCode = (code) => {
  return instance.get('/item/', code).then((res) => {
    return res;
  }).catch((error) => {
  });
}

export const getStatusByCode = (code) => {
  return instance.get('/item/code/', code).then((res) => {
    return res;
  }).catch((error) => {
  });
}

export const updateItem = (itemId) => {
  return instance.patch('/item/', itemId).then((res) => {
    return res;
  }).catch((error) => {
  });
}

export const deleteItem = (itemId) => {
  return instance.get('/item/', itemId).then((res) => {
    return res;
  }).catch((error) => {
  });
}

export const createItem = (itemDetails) => {
  alert('here');
  return instance.post('/item/', itemDetails).then((res) => {
    return res;
  }).catch((error) => {
alert(error);
    return error.response;
  });
}
