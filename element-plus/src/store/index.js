import {createStore} from 'vuex'

const stores = {
    state: {
        username: '',
        type: '',
        token: '',
        yhjb : 2,
    },
    mutations: {
        login(state, value) {
            state.username = value['username']
            state.token = value['token']
            state.type = value['type']
            state.yhjb = value['yhjb']

        },
        logoff(state) {
            state.username = ''
            state.token = ''
            state.type = ''
            state.yhjb = 2
        }
    },
    actions: {},
    modules: {}
}

const store = createStore(stores)

export default store
