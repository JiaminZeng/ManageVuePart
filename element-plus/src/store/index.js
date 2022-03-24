import {createStore} from 'vuex'

const stores = {
    state: {
        username: '',
        type: '',
        token: ''
    },
    mutations: {
        login(state, value) {
            state.username = value['username']
            state.token = value['token']
            state.type = value['type']
        },
        logoff(state) {
            state.username = ''
            state.token = ''
            state.type = ''
        }
    },
    actions: {},
    modules: {}
}

const store = createStore(stores)

export default store
