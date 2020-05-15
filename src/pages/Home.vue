<template>
  <div class="home">
    主页内容
    <good-list />
  </div>
</template>

<script lang="ts">
import GoodList from '@/views/main/GoodList.vue'

export default {
  name: 'Home',
   components: {
    GoodList
  }
}
</script>
