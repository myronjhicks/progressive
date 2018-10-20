import firebase from '@/firebase'

const state = {
    user: null,
    modal: { 
        show: false, 
        component: 'login'
    },
}

const actions = {
    login({ commit }, {email, password }) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
              .then((user) => {
                commit('SET_USER', user)
                resolve(user)
            })
            .catch((error) => {
                commit('SET_USER', null)
                // Use custom error messages
                let errorCode = error.code
                if (errorCode === 'auth/invalid-email') {
                  error.message = 'Email address not valid'
                } else if (errorCode === 'auth/user-not-found') {
                  error.message = "Email doesn't exist"
                } else if (errorCode === 'auth/wrong-password') {
                  error.message = 'Password is incorrect'
                }
                reject(error)
            })
        })
    }
}

const getters = {

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}