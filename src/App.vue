<template>
  <div id="app" class="h-screen p-10 bg-blue-500">
      <div class="w-1/2 p-10 bg-white rounded-md shodow-lg">
        <Title :title="title"></Title>
        <NewTodo :tareas="tareas"></NewTodo>
        <List :tareas="tareas"></List>
      </div>
  </div>
</template>

<script>
import Title from './TitleComponent'
import NewTodo from './NewTodoComponent'
import List from './ListTodoComponent'
export default {
  components: {
    Title,
    NewTodo,
    List
  },
    data(){
      return {
         title: 'Lista de tareas',
         tareas: []
      }
    },
    created(){
      this.$http.get('tareas.json')
          .then(respuesta => {
            return respuesta.json();
          })
          .then(respuestaJson => {
            for(let id in respuestaJson){
                let tarea = {
                  id: id,
                  texto: respuestaJson[id].texto,
                  terminada: respuestaJson[id].terminada
                }
                this.tareas.push(tarea);
            }
          })
    }
}
</script>

<style>

</style>
