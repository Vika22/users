Vue.component('user', {
    props: ['user'],
    template: `
    <div>
    <p>{{user.username}}</p>
    <p>{{user.address}}</p>
    <p>{{user.website}}</p>
    </div>
    `
})

new Vue({
    el: '#post',
    data: () => {
        return {
            // currentPost: '',
            users: [],
        }
    },
    methods: {
        getUsers() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    this.users = response.data
                })
        },
        // getCurrentPost(post) {
        //     this.currentPost = post
        // }

    },
    created() {
        this.getUsers()
    }

})
