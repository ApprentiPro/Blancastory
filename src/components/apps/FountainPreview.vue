<template>
  <div class="preview">
    <div v-for="(element,index) in parsedScript" :key="index" class="element">
     <div v-html="element.script"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Fountain} from 'fountain-js';
import {computed} from 'vue';

let fountain = new Fountain();

const props = defineProps<{
  fountainText: string;
}>();

const parsedScript = computed(() => fountain.parse(props.fountainText, true));
</script>
