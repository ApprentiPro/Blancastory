<script setup lang="ts">

import Button from "@/components/Controls/Button/index.vue";
</script>

<template>
  <header class="h-20 px-5 flex items-center justify-between ">
    <div class="h-16 w-16 rounded-full shadow-2 flex items-center bg-white justify-center">
      <div class="h-12 w-12 rounded-full  shadow-inner bg-white ">

      </div>
    </div>

    <div class="flex items-center gap-x-4">
      <Button theme="primary" > Click Me</Button>
    </div>

  </header>
</template>

<style scoped>

</style>
