const { createApp, ref } = Vue;

const app = createApp({
    // template: `
    // <h1>{{message}}</h1>
    // <p>{{author}}</p>
    // `,
    setup() {
        const message = ref("I'm Batman");
        const author = ref('Bruce Wayne');

        const changeQuote = () => {
            message.value = "Hola, soy Goku";
            author.value = "Goku";
        }

        // setTimeout(() => {
        //     message.value = "Soy Goku";

        //     author.value = "Sigo siendo Goku";
        // }, 1000);


        return {
            message,
            author,
            changeQuote,
        }
    }
});



app.mount('#myApp');
