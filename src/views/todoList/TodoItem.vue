<template>
  <div
    class="todo-item">
        <span 
            class="el-icon-lollipop"
            v-if="type !== 'todo'"></span>
        <span
            class="show-item">
            {{todo.content}}
        </span>
          <el-button 
            v-if="type === 'todo'"
            type="success" 
            icon="el-icon-check" 
            class="done"
            size="mini"
            circle
            @click="complete">
          </el-button>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import ITodo from '@/types/ITodo';
@Component({
    name: 'TodoItem'
})
export default class extends Vue {
    @Prop({required: true}) private todo!: ITodo;
    @Prop({default: 'todo'}) private type!: string;
    public complete() {
        this.$emit('click');
    }
}
</script>
<style lang="less" scoped>
.todo-item {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 5px 0;
  .show-item {
      height: 40px;
      display: flex;
      flex: 1;
      align-items: center;
      padding-left: 15px;
  }
  .done {
      height: 25px;
  }
}
.todo-item::after {
  position: absolute;
  content: '';
  bottom: 0;
  left: 10px;
  width: calc(100% - 10px);
  border-bottom: 1px solid #2c3e50;
  transform: scaleY(.3);
}
</style>