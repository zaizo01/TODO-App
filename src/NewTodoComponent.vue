<template>
    <div>
        <input type="text" class="px-6 py-3 pr-20 mb-4 border border-gray-600 rounde-md"
               placeholder="Nueva tarea..." v-model="nuevaTarea" v-on:keyup.enter="agregarTarea()">
        <button class="px-6 py-3 font-semibold text-white bg-black rounded-md" v-on:click="agregarTarea()">Agregar</button>
    </div>
</template>

<script>
import { bus } from './main'

export default {
    data(){
        return {
            nuevaTarea: ''
        }
    },
    props: ['tareas','updateCounter'],
    methods: {
        agregarTarea(){
            let texto = this.nuevaTarea.trim();
            if(texto){
                this.tareas.push({
                    texto: texto,
                    terminada: false
                })

            }
            this.nuevaTarea = '';
            this.$http.post('tareas.json', {
                texto: texto,
                terminada: false
            }).then( respuesta => console.log(respuesta));
        }
    }
}
</script>