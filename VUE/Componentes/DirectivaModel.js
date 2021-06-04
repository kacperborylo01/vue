let DirectivaModel = {

    template:`
    
        <div>
            <h2 v-html="titulo"></h2>
            <input v-model="inputText">

            <h2>Tipo Checkbox</h2>
            <label>
                <input type="checkbox" v-model="checked">
                    {{ checked ? "Activado": "Desactivado " }}
            </label>

            <h2>Marca las peliculas/series que has visto</h2>
            <label v-for = "(pelicula,index) in peliculas" :key="index">
            <input type ="checkbox" :value="pelicula" v-model="peliculasFavoritas">

                {{ pelicula }}

            </label>
            <br>
            {{peliculasFavoritas}}
            
            <h2>Marca las peliculas/series Favoritas Objetos que has visto</h2>
            
            <label v-for = "(pelicula,index) in peliculasObjeto" :key="'_'+index">
            <input type ="checkbox" :value="pelicula.nombre" v-model="peliculasFavoritasObjeto">

                {{ pelicula.nombre }}

            </label>
            <br>
            {{peliculasFavoritasObjeto}}
            <br>
            <br>
        </div>
    
    `,

    data(){
        return{
            titulo: 'Directiva Model',

            inputText: 'Datos del Input',
            checked: true,

            peliculas:['Pearl Harbor','El hombre en el castillo','Corazones de Acero'],
            peliculasFavoritas: [],

            peliculasObjeto:[
                {
                    nombre: 'Pearl Harbor',
                     id:0
                },
                {
                    nombre: 'El hombre en el castillo',
                     id:1
                },
                {
                    nombre: 'Corazones de Acero', 
                    id:2
                }
            ],

            peliculasFavoritasObjeto:[]
        }
    },

    
}