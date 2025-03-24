<script setup lang="ts">

import TheHeader from "@/components/Layout/TheHeader.vue";
import TheFooter from "@/components/Layout/TheFooter.vue";
</script>

<template>
  <section class="flex h-full flex-col">
    <TheHeader/>
    <section class="flex-grow">
      <slot/>
    </section>
    <TheFooter/>
  </section>

</template>

