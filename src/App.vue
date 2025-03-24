<script setup lang="ts">
import {provide, shallowRef} from "vue";
import router from "@/router";
import layouts from "@/layouts";

const layout = shallowRef('div')
router.afterEach((to) => {
  console.log("this is the layout of the appp", to.meta.layout)
  layout.value = layouts[to.meta.layout] || 'div'
})
provide('app:layout', layout)
</script>

<template>
  <main class="h-full border border-amber-300">
    <component :is="layout || 'div'">
      <router-view/>
    </component>
  </main>
</template>

<style scoped>

</style>
