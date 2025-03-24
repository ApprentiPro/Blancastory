<script setup lang="ts">

import {QButton, QTextarea} from "@qvant/qui-max";
import {ref} from "vue";
import FountainPreview from "@/components/apps/FountainPreview.vue";

const editor = ref<HTMLTextAreaElement | null>(null);
const sceneType = ref('EXT.');
const fountainRaw = ref(`INT. MAISON - JOUR
Alice regarde par la fenêtre. Il pleut.
`);
const options = [
  {
    value: 'INT.',
    label: 'Int'
  },
  {
    value: 'EXT.',
    label: 'ext'
  }
]
const showPreview = ref(false);

const togglePreview = () => {
  showPreview.value = !showPreview.value;
};

const insertScene = () => {

  const sceneTemplate = `\n\n${sceneType.value} LIEU - JOUR\n`;

  const cursorPosition = editor.value?.selectionStart || 0;
  const textBefore = fountainRaw.value.slice(0, cursorPosition);
  const textAfter = fountainRaw.value.slice(cursorPosition);
  fountainRaw.value = textBefore + sceneTemplate + textAfter;
  setTimeout(() => {
    if (editor.value) {
      const newCursorPosition = cursorPosition + sceneTemplate.length;
      editor.value.setSelectionRange(newCursorPosition, newCursorPosition);
      editor.value.focus();
    }
  }, 0);
};

const insertCharacter = () => {
};

const insertAction = () => {
};

const insertAtCursor = (template: string) => {
  const cursorPosition = editor.value?.selectionStart || 0;
  const textBefore = fountainRaw.value.slice(0, cursorPosition);
  const textAfter = fountainRaw.value.slice(cursorPosition);
  fountainRaw.value = textBefore + template + textAfter;

  setTimeout(() => {
    if (editor.value) {
      const newCursorPosition = cursorPosition + template.length;
      editor.value.setSelectionRange(newCursorPosition, newCursorPosition);
      editor.value.focus();
    }
  }, 0);
};
</script>

<template>
  <div class="editor-container">
    <div class="toolbar-container mb-5">
      <q-select v-model="sceneType">
        <q-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </q-select>
      <q-button @click="insertScene">Scène</q-button>
      <q-button @click="insertCharacter">Personnage</q-button>
      <q-button @click="insertAction">Action</q-button>
      <q-button @click="togglePreview">
        {{ showPreview ? 'Masquer Prévisualisation' : 'Afficher Prévisualisation' }}
      </q-button>

    </div>
    <q-textarea ref="editor"
                v-model="fountainRaw"></q-textarea>
    <FountainPreview
        v-if="showPreview"
        :fountainText="fountainRaw"
        class="preview"
    />
  </div>
</template>
