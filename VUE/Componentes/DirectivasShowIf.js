let DirectivasShowIf = {

    template:`
    
        <div>
            <h2 v-html="titulo"></h2>
            <p v-show="mostrar" v-html="mensaje"></p>

            <p v-if="user.permiso">El usuario tiene permiso para ver esto</p>
            <p v-if="!user.permiso">El usuario no tiene permiso para ver esto</p>
            <button @click="user.permiso=!user.permiso">Permiso</button>    
        </div>
    
    `,

    data(){
        return{
            titulo: 'Directiva Show-If',

            mensaje:'<strong style="color:red">Hola desde directiva v-show</strong>',
            mostrar:true,
            user:{
                permiso:false
            }
        }
    }
}