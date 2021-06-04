let DirectivaFor = {

    template:`
    
        <div>
            <h2 v-html="titulo"></h2>

            <h3>Listar un Array</h3>
            <ul>
                <li v-for="(color,index) in lista" :key="index"v-show="index==mostrar">{{ index  }}.-{{ color }}</li>
            </ul>
            <button @click = "sumarUno">+</button>
            <button @click = "restarUno">-</button>
            {{mostrar}}

            <h3>Listar un Objeto</h3>


            <ul>
                <li
                    v-for="(valor,index,key) in objeto" :key="key"
                >

                    {{key}}.-{{index}}.-{{valor}}
                


                </li>

            </ul>

            <h3>Listar un Array</h3>

            <ul>
            
                <li
                
                    v-for="(profesor,key) in arrayObjetos" :key="key"

                >

                     Nombre: {{ profesor.nombre }}<br>
                     Apellido: {{profesor.apellido}}<br>
                     Profesión: {{profesor.profesion}}<br>&nbsp;

                </li>

            </ul>

        
            
        </div>
    
    `,

    data(){
        return{
            titulo: 'Directiva For',
            lista: ['Rojo','Amarillo','Azul','Purpura','Rosa'],

            mostrar:1 ,

            objeto:{
                nombre: 'Kacper',
                apellido: 'Borylo',
                profesion: 'Estudiante'
            },

            arrayObjetos:[
                {
                    nombre: 'Kacper',
                    apellido: 'Borylo',
                    profesion: 'Estudiante'
                },
                {
                    nombre: 'Javier',
                    apellido: 'Legua',
                    profesion: 'Estudiante'
                }
            ]
        }
    },

    methods:{
        sumarUno(){
            if(this.mostrar < this.lista.length - 1){
                this.mostrar++
            }
            
        },

        restarUno(){
            if(this.mostrar > 0){
                this.mostrar--
            }
            
        }
    },
}
