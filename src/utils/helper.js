import { getStorageValues } from '../utils/localStorage'

function objToArray(obj) {
  let newArr = []

  for (const key in obj) {
    newArr.push(obj[key])
  }
  return newArr;
}

function countItemOnCar(obj){
  let items = 0
  if (obj) {
    for (let k in obj) {
      items += obj[k].qty
    }
  }
  return items;
}

function updateItemOnCar(username, title, qty, price, image, description, id, category, rating){
  let dictCart = {}
  let updatedValue = {};
  let dictTmp = {};

  if(!username){
    username = 'GuessUser'
  }

  getStorageValues(username) ? dictCart = getStorageValues(username) : dictCart = {}

  updatedValue = {
    "user": username,
    "title": title,
    "qty": qty,
    "price": price,
    'image': image,
    'description': description,
    'id': id,
    'category': category,
    'rating': rating
  };

  if (updatedValue.id in dictCart) {
    dictTmp = dictCart[updatedValue.id]
    dictTmp.qty += updatedValue.qty
    dictCart[dictTmp]
  } else {
    dictCart[updatedValue.id] = updatedValue
  }

  return dictCart
}

function mergeLoggedGuestCarItems(logged, guest){

  for (const key in guest) {
    if (key in logged) {
      logged[key].qty += guest[key].qty
    }else{
      logged[key] = guest[key]
    }
  }

  return logged
}

function getTotalPayment(dictCar){
  let total = 0
  for (const key in dictCar) {
    total += (dictCar[key].price * dictCar[key].qty)
      
  }
  return total
}

export {
  objToArray,
  countItemOnCar,
  updateItemOnCar,
  mergeLoggedGuestCarItems,
  getTotalPayment
}