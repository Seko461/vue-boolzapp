const { createApp } = Vue

createApp({
    data() {
        return {


            contacts: [
                {
                    image: './assets/img/avatar_1.jpg',
                    name: 'Michele'
                },
                {
                    image: './assets/avatar_2.jpg',
                    name: 'Fabio'
                },
                {
                    image: './assets/avatar_3.jpg',
                    name: 'Samuele'
                },
                {
                    image: './assets/avatar_4.jpg',
                    name: 'Alessandro B.'
                },
                {
                    image: './assets/avatar_5.jpg',
                    name: 'Alessandro L.'
                },
                {
                    image: './assets/avatar_6.jpg',
                    name: 'Angela'
                },
                {
                    image: './assets/avatar_7.jpg',
                    name: 'Giuseppe'
                },
                {
                    image: './assets/avatar_8.jpg',
                    name: 'Francesco'
                }
            ],
        }
    }
}).mount('#app')