<template>
  <div class="home">
    <todo-list />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

// import GoodList from '@/views/main/GoodList.vue'
import TodoList from '@/views/todoList/TodoList.vue'
@Component({
    name: 'Home',
    components: {
        TodoList
    }
})
export default class extends Vue{
  
}
</script>
