/*

Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/

new Vue ({
    el: '#app',

    data: {
        httpAdress: "https://flynn.boolean.careers/exercises/api/random/mail",
        emails: []
    },

    methods: {

        generateEmailList(){
            this.emails = [];
            for (let i = 0; i < 10; i++){
                axios
                    .get(this.httpAdress)
                    .then((response)=>{
                        this.emails.push(response.data.response)
                })
            }
        }
    }
})