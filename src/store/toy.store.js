import { toyService } from '../services/toy-service'

export default {
   state: {
      toys: null,
      filterBy: null
   },
   getters: {
      toys(state) {
         return state.toys
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
      setFilter(state, {filterBy}) {
         state.filterBy = filterBy;
       },
   },
   actions: {
      loadToys({ commit }) {
         toyService.query().then((toys) => {
            commit({ type: 'setToys', toys })
         })
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
      filter({commit, dispatch}, {filterBy}) {
         commit({type: 'setFilter', filterBy});
         dispatch({type: 'loadToys'});
       },
   },
}
