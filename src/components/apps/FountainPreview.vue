<template>
  <div class="preview">
    <div v-for="(element,index) in parsedScript" :key="index" class="element">
     <div v-html="sanitizeHtml(element)"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Fountain} from 'fountain-js';
import {computed} from 'vue';
import DOMPurify from 'dompurify';

let fountain = new Fountain();

const props = defineProps<{
  fountainText: string;
}>();

const parsedScript = computed(() => {
  const result = fountain.parse(props.fountainText, true);
  // Vérifier si le résultat a une propriété script
  if (typeof result === 'object' && result && 'script' in result) {
    return result.script;
  }
  return [];
});

const sanitizeHtml = (content: any): string => {
  if (typeof content === 'string') {
    return DOMPurify.sanitize(content);
  }
  if (typeof content === 'object' && content && 'html' in content) {
    return DOMPurify.sanitize(content.html);
  }
  return DOMPurify.sanitize(String(content || ''));
};
</script>
