const { createApp } = Vue

createApp({
    data() {
        return {

            activeContact: 0,
            contacts: [
                {
                    image: './assets/img/avatar_1.jpg',
                    name: 'Michele'
                },
                {
                    image: './assets/img/avatar_2.jpg',
                    name: 'Fabio'
                },
                {
                    image: './assets/img/avatar_3.jpg',
                    name: 'Samuele'
                },
                {
                    image: './assets/img/avatar_4.jpg',
                    name: 'Alessandro B.'
                },
                {
                    image: './assets/img/avatar_5.jpg',
                    name: 'Alessandro L.'
                },
                {
                    image: './assets/img/avatar_6.jpg',
                    name: 'Angela'
                },
                {
                    image: './assets/img/avatar_7.jpg',
                    name: 'Giuseppe'
                },
                {
                    image: './assets/img/avatar_8.jpg',
                    name: 'Francesco'
                }
            ],
        }
    }
}).mount('#app')