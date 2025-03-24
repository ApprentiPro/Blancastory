<script setup lang="ts">

import {QButton, QTextarea} from "@qvant/qui-max";
import {ref,nextTick} from "vue";
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
  insertAtCursor(sceneTemplate)
};

const insertCharacter = () => {
  const characterTemplate = `\n\nPERSONNAGE\n`;
  insertAtCursor(characterTemplate);
};

const insertAction = () => {
  const actionTemplate = `\n\n*Action*\n`;
  insertAtCursor(actionTemplate);
};
const insertTransition = () => {
  const transitionTemplate = `\n\nCUT TO:\n`;
  insertAtCursor(transitionTemplate);
};

const insertNote = () => {
  const noteTemplate = `\n\n[[Note pour l'équipe]]\n`;
  insertAtCursor(noteTemplate);
};

const insertPageBreak = () => {
  const pageBreakTemplate = `\n\n===\n`;
  insertAtCursor(pageBreakTemplate);
};

const insertCenteredText = () => {
  const centeredTextTemplate = `\n\n>Texte centré<\n`;
  insertAtCursor(centeredTextTemplate);
};

const insertAtCursor = (template: string) => {
  if (!editor.value) return;

  const cursorPosition = editor.value.selectionStart || 0;
  const textBefore = fountainRaw.value.slice(0, cursorPosition);
  const textAfter = fountainRaw.value.slice(cursorPosition);
  fountainRaw.value = textBefore + template + textAfter;

  // Attendre que Vue mette à jour le DO
  nextTick(() => {
    const newCursorPosition = cursorPosition + template.length;
    editor.value!.setSelectionRange(newCursorPosition, newCursorPosition);
    editor.value!.focus();
  });
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
      <q-button @click="insertTransition">Transition</q-button>
      <q-button @click="insertNote">Note</q-button>
      <q-button @click="insertPageBreak">Saut de Page</q-button>
      <q-button @click="insertCenteredText">Texte Centré</q-button>
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
