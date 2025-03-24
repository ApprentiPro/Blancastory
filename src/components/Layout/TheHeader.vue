<script setup lang="ts">

import {QInput} from "@qvant/qui-max";
</script>

<template>
  <header class="h-20 px-5 grid grid-cols-4 gap-x-5">
    <q-button
        type="icon"
        theme="secondary"
        class="!w-20 !h-20 !border !border-gray-300"
    >
      <img src="/static/images/logo_svg.svg" alt="This is the logo svg version for the alternative blancostory application">
    </q-button>
    <div class="col-span-2 self-center">
      <q-input placeholder="search element"/>
    </div>
    <div class="flex items-center justify-self-end  gap-x-4">
      <q-button
          type="icon"
          theme="secondary"
          icon="q-icon-bell"
      />
      <q-button
          type="icon"
          theme="secondary"
          icon="q-icon-comment"
      />
      <q-button
          type="icon"
          theme="secondary"
          icon="q-icon-user"
      />
    </div>

  </header>
</template>

<style scoped>

</style>
