import { toyService } from '../services/toy-service'

export default {
   state: {
      toys: null,
      prices: null,
      filterBy: null,
      type: {
         adult: 0,
         funny: 0,
         educational: 0,
       },
   },
   getters: {
      toys(state) {
         return state.toys
      },
      avgPrice(state) {
         return state.prices
      },
   },
   mutations: {
      setToys(state, { toys }) {
         state.toys = toys
      },
      removeToy(state, { id }) {
         console.log('id:', id);

         const idx = state.toys.findIndex((toy) => toy.id === id)
         state.toys.splice(idx, 1)
      },
      saveToy(state, { toy }) {
         const idx = state.toys.findIndex((currToy) => currToy.id === toy.id)
         if (idx !== -1) state.toys.splice(idx, 1, toy)
         else state.toys.push(toy)
      },
      setFilter(state, { filterBy }) {
         state.filterBy = filterBy;
      },
      updateAvg(state) {
         var adultAvg = {
           sum: 0,
           count: 0,
         }
         var funnyAvg = {
           sum: 0,
           count: 0,
         }
         var educationalAvg = {
           sum: 0,
           count: 0,
         }
         state.toys.forEach((toy) => {
           if (toy.type === 'Adult') {
             adultAvg.sum += toy.price
             adultAvg.count++
           } else if (toy.type === 'Funny') {
             funnyAvg.sum += toy.price
             funnyAvg.count++
           } else if (toy.type === 'Educational') {
             educationalAvg.sum += toy.price
             educationalAvg.count++
           }
         })      
         state.type.adult = (+adultAvg.sum / +adultAvg.count).toFixed(2)
         state.type.funny = (+funnyAvg.sum / +funnyAvg.count).toFixed(2)
         state.type.educational = (+educationalAvg.sum / +educationalAvg.count).toFixed(2)
       },
   },
   actions: {
      loadPrices({ commit }) {
         toyService.query().then((toys) => {
            const prices = toys.map(toy => { return toy.price })
            commit({ type: 'setPrices', prices })
         })
      },
      loadToys({ commit, state }) {
         toyService
           .query(state.filterBy)
           .then((toys) => {
             commit({ type: 'setToys', toys })
           })
           .then(() => commit({ type: 'updateAvg' }))
       },
      removeToy({ commit }, { id }) {
         console.log('removing toy id:', id);

         toyService.remove(id).then(() => {
            commit({ type: 'removeToy', id })
         })
      },
      saveToy({ commit }, { toy }) {
         toyService.save(toy).then((toy) => {
            commit({ type: 'saveToy', toy })
         })
      },
      filter({ commit, dispatch }, { filterBy }) {
         commit({ type: 'setFilter', filterBy });
         dispatch({ type: 'loadToys' });
      },
   },
}
