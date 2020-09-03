<template>
    <div class="todo-container">

        <p class="todo-header">🌞请输入待办事项🌞</p>
        <el-input 
            v-model="content"
            ref="input"
            placeholder="write something"
            class="todo-input-field">
        </el-input>
        <el-button 
            type="primary" 
            @click="save"
            :disabled="!content">
            保存
        </el-button>
        <todo-item 
            v-for="(todo, i) in todos"
            :key="todo.time.getTime()"
            :todo="todo"
            @click="complete(i)"
            type="todo"/>
        <div 
            v-show="todos.length <= 0"
            class="default-todo-content">
            暂无待完成事项
        </div>
        <div class="title">已完成{{trashCount}}项</div>
        <!-- todos -->
        <todo-item
        v-for="todo in trashes"
        :key="todo.time.getTime()"
        type="trash"
        :todo="todo"/>
        <!-- default -->
        <div v-show="trashes.length <= 0" class="default-todo-content">
            暂无已完成事项
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import ITodo from "@/types/ITodo";
import TodoItem from "./TodoItem.vue";
import {TodoStoreModule} from '@/store/modules/todo'
@Component({
    name: 'TodoList',
    components: {
        TodoItem
    }
})
export default class extends Vue {
    private content = '';
    private todos: ITodo[] = [
        {
            content: 'nothing', time: new Date()
        }
    ];
    // computed
    get todoCount() {
        const {length} = this.todos;
        return length > 0 ? `共${length}个` : '';
    }
    // 已完成数量
    get trashCount() {
        return TodoStoreModule.trashCount;
    }

    // 已完成
    get trashes() {
        return TodoStoreModule.trashes;
    }
    // 设置完成
    public complete(index: number) {
        const target = this.todos.splice(index, 1);
        TodoStoreModule.addTrash(target[0]);
    }
    // // 将todo设置为完成
    // public complete(index: number) {
    //     this.todos.splice(index, 1)
    // }
    // 保存
    public save() {
        this.todos.push({
            content: this.content,
            time: new Date()
        })
        this.content = '';
    }
}
</script>

<style lang="less" scoped>
.todo-container {
    width: 500px;
    .todo-header {
        font-size: 24px;
    }
    .title {
        margin-top: 40px;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
    }
    .default-todo-content {
        margin-top: 20px;
        color: grey;
    }
    .todo-input-field {
        width: 400px;
        height: 40px;
        margin-top: 10px;
        padding-left: 10px;
        box-sizing: border-box;
        font-size: 16px;
        text-align: left;
        line-height: 40px;
        margin-right: 20px;
    }
}
</style>