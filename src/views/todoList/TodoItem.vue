<template>
  <div
    class="todo-item">
        <span
            class="show-item">{{todo.content}}</span>
          <el-button 
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
    @Prop({ required: true }) private todo!: ITodo;
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
  padding: 5px 0 5px 30px;
  .show-item {
    height: 40px;
      display: flex;
      flex: 1;
      align-items: center;
  }
  .done {
      height: 25px;
  }
}
.todo-item::before {
  position: absolute;
  content: '';
  top: 14px;
  left: 10px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid grey;
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