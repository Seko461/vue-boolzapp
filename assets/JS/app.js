const { createApp } = Vue

createApp({
    data() {
        return {
            selectedContact: 0,
            newMessage: "",
            newReply: "",
            newSearch: "",
            checkPop: "",
            dateTime: "",
            searchInputText: '',
            filteredContacts: [],


            contacts: [
                {
                    name: 'Michele',
                    avatar: "./assets/img/avatar_1.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: "./assets/img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: "./assets/img/avatar_3.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: "./assets/img/avatar_4.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: "./assets/img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: "./assets/img/avatar_6.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: "./assets/img/avatar_7.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: "./assets/img/avatar_8.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        clickContact(index) {
            this.selectedContact = index;
        },
        getDate() {
            const d = new Date();
            let today = d.toLocaleDateString();
            console.log(today);
            return today;
        },
        getTime() {
            const t = new Date();
            let now = t.toLocaleTimeString();
            console.log(now);
            return now;
        },
        popUp(index) {
            if (this.checkPop !== index) {
                this.checkPop = index;
                console.log(this.checkPop);
            } else {
                this.checkPop = -1
                console.log(this.checkPop);
            }
        },
        deleteMsg(index) {
            this.contacts[this.selectedContact].messages.splice(index, 1)
            this.checkPop = -1
        },
        addReply() {
            const newMsg = {
                date: this.getDate() + ' ' + this.getTime(),
                message: "ok",
                status: 'received'
            }
            this.contacts[this.selectedContact].messages.push(newMsg);
        },
        addMessage() {
            const nMsg = {
                date: this.getDate() + ' ' + this.getTime(),
                message: this.newMessage,
                status: 'sent'
            }
            if (this.newMessage.trim() !== "") {
                this.contacts[this.selectedContact].messages.push(nMsg);
                this.newMessage = "";
                this.newReply = setTimeout(this.addReply, 1000);
            }
        },
        searchContact() {
            this.contacts.forEach((element, i) => {
                if (this.contacts[i].name.toLowerCase().includes(this.newSearch.toLowerCase())) {
                    this.contacts[i].visible = true;
                    console.log('Visible');
                } else {
                    this.contacts[i].visible = false;
                    console.log('Not-Visible');

                }
            });
        },

    },

}).mount('#app')


