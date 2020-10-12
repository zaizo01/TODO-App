<template>
    <div>
        <h2 class="pb-3 text-2xl font-semibold">{{ titleUpper() }}</h2>
    </div>
</template>

<script>
import { bus } from './main'

export default {
    props: ['title'],
    data() {
        return {
            numTodo : 0
        }
    },
    methods: {
        titleUpper(){
            return this.title.toUpperCase();
        }
    }
}
</script>


<style>

</style>