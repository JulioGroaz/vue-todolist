const app = Vue.createApp({
    data(){
        return{
          listElements : [
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
         
        }
        

    },
    methods: {
        toggleDone: function(itemIndex){    //inverte il done
            this.listElements[itemIndex].done= !this.listElements[itemIndex].done;
        },

        //aggiungo una task
        addNewTask: function(newContent){
            const newTask ={
                text: newContent,
                done: false
            }
            this.listElements.push(newTask);
            this.clearNewTaskInput ();
        },

        //libera input 
        clearNewTaskInput(){
            this.newTaskContent= '';
        },

        removeTask: function(taskIndex){
            this.listElements.splice(taskIndex,1);
        }

    },
}).mount('#app');