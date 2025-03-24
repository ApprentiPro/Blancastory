<script setup lang="ts">

import {QButton} from "@qvant/qui-max";
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
 <div class="grid grid-col-4">
   <div></div>
   <div class="grid grid-col-2 col-span-2">
     <div>
       <q-button @click="router.push('/scene')">
         Scénario
       </q-button>
     </div>
     <div>Storyboard</div>
     <div>Assets</div>
     <div></div>
   </div>
   <div></div>
 </div>
</template>

<style scoped>

</style>
