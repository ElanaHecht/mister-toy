import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const KEY = 'toys_db'
_createToys()

const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor']

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query() {
  return storageService.query(KEY)
}

function getById(toyId) {
  const toy = storageService.get(KEY, toyId)
  const review = 'I bought this toy and it is amazing!'
  return toy.reviews.push(review)
}

function remove(toyId) {
  return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy._id) return storageService.put(KEY, toy)
  return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    name: '',
    price: 0,
    labels: [],
    createdAt: Date.now(),
    inStock: true,
    reviews: ['I love this toy!']
  }
}

function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      { _id: 't101', name: 'Talking Doll', price: 123, labels: ['Doll', 'Battery Powered', 'Baby'], createdAt: 1631031801011, inStock: true,  reviews: ['This is a terrible toy. Do not buy!'] },
      { _id: 't102', name: 'Remote Robot', price: 98, labels: ['Doll', 'Battery Powered', 'Outdoor'], createdAt: 1631031701011, inStock: true,  reviews: ['This is an awesome toy. Buy it now!'] },
      { _id: 't103', name: 'Hot Wheels', price: 105, labels: ['On wheels', 'Battery Powered', 'Outdoor'], createdAt: 1631031601011, inStock: true,  reviews: ['This is a terrible toy. Do not buy!'] },
      { _id: 't104', name: 'Van Gogh Puzzle', price: 145, labels: ['Art', 'Puzzle', 'Box game'], createdAt: 1631031501011, inStock: true,  reviews: ['This is an awesome toy. Buy it now!']},
      ,
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}
