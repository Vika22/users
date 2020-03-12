Vue.component('user', {
    props: ['user'],
    template: `

    `
})

new Vue({
    el: '#post',
    data: () => {
        return {
            currentUser: '',
            users: [

            ],
            complexFields: ['address', 'company']
        }
    },
    methods: {
        getUsers() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    this.users = response.data
                })
        },
        getCurrentPost(user) {
            this.currentUser = user
        }

    },
    created() {
        this.getUsers()
    }

})
