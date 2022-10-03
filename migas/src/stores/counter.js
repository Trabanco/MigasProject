import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore ({
  id: "productMigasArray",
  state: () =>({
    favoritesArray: [],
  }),

  getters: {
  },

  actions: {
    addFavorite(product){
      if (this.empptyArray()){
        this.pushArray(product)
        return
      }
      if (this.existArray(product)){
        this.pushArray(product)
        return
      }
    },

    existArray(product){
      if (this.favoritesArray.includes(product)) {
        let posicion = this.favoritesArray.indexOf(product)
        this.deleteArray(posicion)
        return false
      }
      return true
    },
    
    deleteArray(index){
      this.favoritesArray.splice(index,1)
      return
    },

    pushArray(product){
      this.favoritesArray.push(product)
      return
    },

    emptyArray(){
      if (this.favoritesArray.length===0 ) {
        return true
      }
      return false
    }
 }
})


