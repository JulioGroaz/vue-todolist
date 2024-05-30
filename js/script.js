const app = Vue.createApp({
    data(){
        listElements:[
            {
                text:'Comprare Latte',
                done: 'false',
            },
            {
                text:'Comprare Lanciafiamme',
                done: false,
            },
            {
                text:'Comprare naso da clown',
                done: 'false',
            },
        ],
         newListItem: ''

    },

});
app.mount('#app');