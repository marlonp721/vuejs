
const app = Vue.createApp({
    // template: `
    // <h1>Hola mundo</h1>
    // <p> {{ 1 + 1  }} </p>
    // `
    data(){
        return{
            message: 'Hola mundo',
            quote: 'Soy batman'
        }
    },
    methods: {
      changeQuote(){
            this.message = 'Hola mundo123'
            // quote: 'Soy batman123'
            this.capitalize()
      },
      capitalize(){
            this.quote = this.quote.toUpperCase()
      }  
    },

})

app.mount('#myApp')