import { createStore } from "vuex";

const store = createStore({
    state: {
        token: sessionStorage.getItem("TOKEN") || null,
        user: {},
        loading: false
    },
    getters: {
        loggedIn: (state) => {
            return !!state.token;
        }
    },
    actions: {
        
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token;
            sessionStorage.setItem('TOKEN', token);
        },
        setUser: (state, user) => {
            state.user = user;
        },
        logOut: (state) => {
            state.token = null;
            state.user = null;
            sessionStorage.removeItem('TOKEN');
        },
        setLoading: (state, boolVal) => {
            state.loading = boolVal || false;
        }
    },
    modules: {

    }
});