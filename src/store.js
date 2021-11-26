import { createStore } from 'vuex'

export const store = createStore({
    state(){
        return{
            message: 'count number.',
            couter: 0,
        }
    },
    mutations:{
        count: (state,n)=>{
            state.counter += n
        },
        say: (state, msg)=>{
            state.message = msg
        },
        reset: (state)=> {
            state.counter = 0
            state.message = 'reset!!'
        },
    },
    actions: {
        doit: (countex)=> {
            var n = Math.floor(Math.random() * 10)
            countex.commit('count', n)
            countex.commit('say', 'add' + n + '!')
        },
    }
})