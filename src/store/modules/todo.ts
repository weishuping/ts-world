import {VuexModule, Module, Mutation, Action, getModule} from 'vuex-module-decorators';
import store from '@/store';
import ITodo from '@/types/ITodo';
interface TodoStore {
    trashes: ITodo[];
}
@Module({dynamic: true, store, name: 'config'})

class TodoStore extends VuexModule implements TodoStore {
    // 已完成列表
    public trashes: ITodo[] = [];

    // 加入已完成列表
    @Mutation
    private ADD_TRASH (todo: ITodo) {
        this.trashes.push(todo);
    }

    public get trashCount() {
        return this.trashes.length;
    }

    // 加入已完成列表
    @Action({rawError: false})
    public addTrash(todo: ITodo) {
        this.ADD_TRASH(todo);
    }
}

export const TodoStoreModule = getModule(TodoStore);