let Cantante={
    template:`

    <div>
        <nav>
            <ul>
                 <li><a href="#" @click="menu1()">Cantantes</a></li>
                 <li><a href="#" @click="menu2()">Kizo</a></li>
                 <li><a href="#" @click="menu3()">Tymek</a></li>
                 <li><a href="#" @click="menu4()">Szpaku</a></li>
            </ul>
        </nav>

        <nav class="buscar">
            <div v-if="menu==1" class="cont">
                <input type="search" v-model="busqueda" @keydown.enter="getSingers">
                <button class="button" @click="getSingers">Buscar</button>
            </div>
        </nav>    

       <div>
            
            <div v-if="hits[0]">
            <br><br>
                <a :href="hits[0].result.primary_artist.url" target="_blank">Informe sobre {{hits[0].result.primary_artist.name}}</a>
                <h2>Hits más escuchados de {{hits[0].result.primary_artist.name}}</h2>
                <img :src="hits[0].result.primary_artist.image_url" width=300px></img>
            </div>
             
            <div v-for="(hit, index) in hits" :key="index" class="bloque">
            <h3>{{ hit.result.title }}</h3>
            <a :href="hit.result.url" target="_blank">Letra de {{ hit.result.title }}</a>
            <br><br>
            <img :src="hit.result.header_image_url" width=250px></img>
            
            </div>
       
       </div>
        
    </div> 
        
    

    
    `,

    data(){
        return{
            strSinger: 'Artistas Polacos de rap más reconocidos',
            cantante: null,
            hits:[],
            busqueda:'',
            menu:0
            
        }
    },
    components:{

        
        
    },

    methods: {
  
        getSingers() {
            fetch(`https://genius.p.rapidapi.com/search?q=${this.busqueda}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-key": "24ac918ccamshdd8ce0d31207769p19ffa8jsn601d3a5fb311",
                        "x-rapidapi-host": "genius.p.rapidapi.com"
                    }
                })
                .then(response => response.json())
                .then(data => {
                    this.hits = data.response.hits
                    console.log(data.response.hits)
                })
                .catch(err => {
                    console.error(err);
                });
        },

        menu1() {
            this.menu = 1
            this.hits = []
            this.busqueda = ""
        },

    mounted(){
     //this.getSingers()
    }

   }}

