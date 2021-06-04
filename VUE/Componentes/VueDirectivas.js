let VueDirectivas = {

    template:`
    
        <div>
            <p v-html="descripcion"></p>
            <directivas-show-if></directivas-show-if>
            <directiva-for></directiva-for>
            <directiva-model></directiva-model>
        </div>
    
    `,

    data(){
        return{
            descripcion: 'Este es un curso de <strong>Vue</strong>. Un frame work de JavaScript'
        }
    },

    components:{
        DirectivasShowIf,
        DirectivaFor,
        DirectivaModel
    }
}