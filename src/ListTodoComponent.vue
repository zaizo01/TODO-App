<template>
       <ul class="pl-4 font-semibold list-decimal">
           <li v-for="(tarea, indice) in tareas" class="p-4 border-b-2" v-bind:class="{terminada: tarea.terminada}">
               {{ tarea.texto }}
               <span >
                   <button class="px-4 py-2 font-semibold text-white bg-green-500 rounded-md hover:bg-green-600" 
                           v-on:click="estado(indice)">Done</button>
                   <button class="px-4 py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600" v-on:click="borrarTarea(indice)">Delete</button>
               </span>
           </li>
       </ul>
</template>

<script>
export default {
    props: ['tareas'],
    methods: {
     estado(indice){
        let terminada = this.tareas[indice].terminada = !this.tareas[indice].terminada;
        let id = this.tareas[indice].id;

        this.$http.patch('tareas/' + id + '.json', {
            terminada: terminada
        }).then(respuesta => { console.log(respuesta) })
     },
     borrarTarea(indice){
        let id = this.tareas[indice].id;
        this.tareas.splice(indice,1)

        this.$http.delete('tareas/' + id + '.json').then(respuesta => { console.log(respuesta) });
      }
    }
}
</script>

<style>
.terminada {
    color: gray;
    text-decoration: line-through;    
}
    
</style>