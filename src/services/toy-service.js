
import axios from 'axios';
import { utilService } from './util-service.js'
const TOY_URL = '//localhost:3030/api/toy/'

export const toyService = {
    query,
    remove,
    save,
    getEmptyToy,
    getById,
}

function query(filterBy) {
    return axios.get(TOY_URL, { params: filterBy })
        .then(res => res.data)
}

function getById(id) {
    return axios.get(TOY_URL + id)
        .then(res => res.data)
}

function remove(toyId) {
    return axios.delete(TOY_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return axios.put(TOY_URL + toy._id, toy)

    } else {
        return axios.post(TOY_URL, toy)

    }
}

function getEmptyToy() {
    return {
        _id: utilService.makeId(),
        name: '',
        price: 0,
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: true,
        reviews: ['I love this toy!', 'The best toy']
    }
}

// function _createToys() {
//   let toys = utilService.loadFromStorage(TOY_KEY)
//   if (!toys || !toys.length) {
//     toys = [
//       { _id: 't101', name: 'Talking Doll', price: 123, labels: ['Doll', 'Battery Powered', 'Baby'], createdAt: 1631031801011, inStock: true,  reviews: ['This is a terrible toy. Do not buy!'] },
//       { _id: 't102', name: 'Remote Robot', price: 98, labels: ['Doll', 'Battery Powered', 'Outdoor'], createdAt: 1631031701011, inStock: true,  reviews: ['This is an awesome toy. Buy it now!'] },
//       { _id: 't103', name: 'Hot Wheels', price: 105, labels: ['On wheels', 'Battery Powered', 'Outdoor'], createdAt: 1631031601011, inStock: true,  reviews: ['This is a terrible toy. Do not buy!'] },
//       { _id: 't104', name: 'Van Gogh Puzzle', price: 145, labels: ['Art', 'Puzzle', 'Box game'], createdAt: 1631031501011, inStock: true,  reviews: ['This is an awesome toy. Buy it now!']},
//     ]
//     utilService.saveToStorage(TOY_KEY, toys)
//   }
//   return toys
// }
