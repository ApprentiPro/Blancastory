<script setup lang="ts">
import {provide, shallowRef} from "vue";
import router from "@/router";
import layouts from "@/layouts";
import type { Component } from "vue";

const layout = shallowRef<Component | string>('div')
router.afterEach((to) => {
  console.log("this is the layout of the appp", to.meta.layout)
  const layoutName = to.meta.layout as keyof typeof layouts
  layout.value = layoutName && layouts[layoutName] ? layouts[layoutName] : 'div'
})
provide('app:layout', layout)
</script>

<template>
  <main class="h-full" style="background: #e0e0e0;">
    <component :is="layout || 'div'">
      <router-view/>
    </component>
  </main>
</template>

<style scoped>

</style>
