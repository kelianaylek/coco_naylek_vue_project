import { createStore } from 'vuex'
import router from '../router/index.js'


export default createStore({
    state: {
        blogs: [],
        users: [],

        userConnected : false,

        blogTitle: "",
        blogMetaTitle: "",
        blogMetaDescription: "",
        blogImage: "",
        blogContent: ""

    },

    mutations: {
        ADD_ITEM(state, item) {
            function createNode(element) {
                return document.createElement(element);
            }

            function append(parent, el) {
                return parent.appendChild(el);
            }
            let errors = document.querySelector("#errors")

            let error = createNode('p');

            if (item.title == "") {
                error.innerHTML = "Merci de choisir un titre";
                append(errors, error);

            } else if (item.metaTitle == "") {
                error.innerHTML = "Merci de choisir un metaTitle";
                append(errors, error);

            } else if (item.metaDescription == "") {
                error.innerHTML = "Merci de choisir une metaDescription";
                append(errors, error);

            } else if (item.content == "") {
                error.innerHTML = "Merci de choisir un content";
                append(errors, error);

            } else {
                if (item.image == "") {
                    item.image = "https://media-exp1.licdn.com/dms/image/C4E03AQEu5FtYDinAsA/profile-displayphoto-shrink_200_200/0/1583224561076?e=1620864000&v=beta&t=M6zr9GwcJ6qG8Cn74TpbD8PmNBMbCVtFHDmWTUbPZf4"
                }
                state.blogs.push(item)
                console.log(item)

                router.push({ path: '/admin' })

                state.blogTitle = "",
                    state.blogMetaTitle = "",
                    state.blogMetaDescription = "",
                    state.blogImage = "",
                    state.blogContent = ""
            }
        },

        UPDATE_ELEMENT(state, element) {
            if (element.id == "blogTitle") {
                state.blogTitle = element.value
            }

            if (element.id == "blogMetaTitle") {
                state.blogMetaTitle = element.value
                console.log(state.blogMetaTitle)
            }

            if (element.id == "blogMetaDescription") {
                state.blogMetaDescription = element.value
            }

            if (element.id == "blogImage") {
                state.blogImage = element.value
            }

            if (element.id == "blogContent") {
                state.blogContent = element.value
            }
        },

        DELETE_BLOG(state, item) {
            state.blogs.splice(state.blogs.indexOf(item), 1)
        },

        CHANGE_ACTIVE(state, item) {
            if (!item.active) {
                state.blogs.forEach(element => {
                    if (element.id != item.id && element.active == true) {
                        element.active = false
                    } else {
                        state.blogs[state.blogs.indexOf(item)].active = true
                    }
                });
            } else {
                state.blogs[state.blogs.indexOf(item)].active = false
            }
        },

        CHANGE_BLOG(state, payload) {
            state.blogs[payload.oldId] = payload.item
        },

        ADD_USER(state, user) {
            user.id = state.users.length
            state.users.push(user)

            router.push({ path: '/login' })
        },

        CONNECT_USER(state, user) {
            state.users.forEach(element => {
                if (element.mail == user.mail) {
                    if (element.password == user.password) {
                        user.id = element.id
                        user.username = element.username
                        user.isConnected = true
                        state.users[element.id] = user
                        state.userConnected = true
                        router.push({ path: '/blog' })

                    } else {
                        console.log("PAS DE MDP")
                    }
                }
            });
        },

        DECONNEXION(state, user) {
            user.isConnected = false
            state.users[user.id] = user
            state.userConnected = false
            router.push({ path: '/login' })

        }
    },


    actions: {
        addItem({ commit }) {
            let item = {
                id: this.state.blogs.length,
                title: this.state.blogTitle,
                metaTitle: this.state.blogMetaTitle,
                metaDescription: this.state.blogMetaDescription,
                image: this.state.blogImage,
                content: this.state.blogContent,
                active: false
            }

            commit('ADD_ITEM', item)
        },

        changeBlog({ commit }, element) {
            let oldId = element.id
            let oldActive = element.active

            let item = {
                id: oldId,
                title: this.state.blogTitle,
                metaTitle: this.state.blogMetaTitle,
                metaDescription: this.state.blogMetaDescription,
                image: this.state.blogImage,
                content: this.state.blogContent,
                active: oldActive
            }

            commit('CHANGE_BLOG', { item, oldId })
        },

        // addUser({ commit }, element){

        // }
    },

    modules: {}

})