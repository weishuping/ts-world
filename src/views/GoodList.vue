<template>
    <div>
        <button type="button" @click="sayHello">切换名称</button>
        {{MyName}}
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GoodList extends Vue {
    name = 'xiaoming';
    get MyName(): string{
        return `My name is ${this.name}`
    }
    sayHello(): void{
        this.name = 'no one'
    }
}
// export default Vue.extend({
//     name: 'GoodList',
//     methods: {
//         showAlert() {
//             this.a = 'yes'
//         }
//     }
// })
</script>