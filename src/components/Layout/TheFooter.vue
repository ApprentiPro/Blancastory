<script setup lang="ts"></script>

<template>
  <footer class="flex items-center justify-center gap-x-4 relative w-full h-14 neumorphic-footer">
    <!-- Texte gauche -->
    <div class="flex h-14 items-end justify-center">
      <p class="text-blue-600 font-medium">copy@2024</p>
    </div>

    <!-- Élément central rectangle avec style neumorphique -->
    <div class="relative max-w-screen-sm w-full h-14">
      <div class="trapeze-neuro">
        <!-- Contenu retiré -->
      </div>
    </div>

    <!-- Texte droit -->
    <div class="flex items-end h-14 justify-center">
      <p class="text-blue-600 font-medium">copy@2024</p>
    </div>
  </footer>
</template>

<style scoped>
.neumorphic-footer {
  background: #e0e0e0;
}

.trapeze-neuro {
  position: relative;
  width: 100%;
  height: 56px;
  background: #e0e0e0;

  /* Forme par défaut : l'ancien état hover */
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15),
  inset -2px -2px 4px rgba(255, 255, 255, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* L'espace intérieur qui ressort - forme par défaut : l'ancien état hover */
.trapeze-neuro::before {
  content: '';
  width: calc(100% - 32px);
  height: calc(100% - 20px);
  background: #e0e0e0;
  border-radius: 8px;
  /* Forme par défaut : pas d'ombre vers le bas, pas de bordure */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15),
  -2px -2px 4px rgba(255, 255, 255, 0.9),
  inset 1px 1px 2px rgba(0, 0, 0, 0.1),
  inset -1px -1px 2px rgba(255, 255, 255, 0.9);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.trapeze-neuro:hover {
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.18),
  inset -3px -3px 6px rgba(255, 255, 255, 0.95);
}

.trapeze-neuro:hover::before {
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.18),
  -3px -3px 6px rgba(255, 255, 255, 0.95),
  inset 2px 2px 4px rgba(0, 0, 0, 0.12),
  inset -2px -2px 4px rgba(255, 255, 255, 0.95);
}

.trapeze-neuro:active {
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.2),
  inset -4px -4px 8px rgba(255, 255, 255, 0.9);
}

.trapeze-neuro:active::before {
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.2),
  inset -3px -3px 6px rgba(255, 255, 255, 0.9);
}
</style>