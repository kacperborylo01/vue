let Pelicula = {
    template: `
    
        <div>
        
        <h2>{{title | mayusculas}}</h2>
        
               <img v-bind:src="cover">
               <p v-text="synopsis"></p>
               <button @click="favoritos()">{{like ? 'LIKE' : 'Add Favoritos'}}</button>
               
            

        </div>
    `,


    props: ['id','title','cover','synopsis','like'],

    data(){
        return{
          
        }
    },

    filters:{
        mayusculas(value){
            return value.toUpperCase()

        }
    },

    methods:{
        favoritos(){
           this.$emit('update:like',!this.like)
        }
    },
}