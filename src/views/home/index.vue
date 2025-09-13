<script setup lang="ts">
import { ref } from 'vue'
import Calendar from '@/components/ui/Calendar.vue'

// Date sélectionnée pour le calendrier
const selectedDate = ref(new Date())
</script>

<template>
  <div class="h-full flex gap-6 p-6">
    
    <!-- Section gauche -->
    <div class="flex flex-col gap-6 w-80">
      
      <!-- Bloc calendrier en haut -->
      <div class="neumorphic-block p-2.5 h-96 overflow-hidden">
        <div class="neumorphic-inner h-full">
          <div class="p-4 h-full flex flex-col">
            <h3 class="text-gray-700 font-semibold mb-4 text-center">Calendrier</h3>
            
            <!-- Composant calendrier -->
            <div class="flex-1 overflow-hidden">
              <Calendar v-model="selectedDate" />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bloc image personnage en bas -->
      <div class="neumorphic-block p-2.5 flex-1">
        <div class="neumorphic-inner h-full">
          <div class="h-full rounded-lg overflow-hidden character-background flex items-end justify-center p-4">
            <div class="text-white text-center bg-black bg-opacity-50 rounded-lg p-3">
              <h4 class="font-bold text-lg">Personnage du jour</h4>
              <p class="text-sm opacity-90">Inspiration gaming</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    <!-- Section centrale (vide pour l'instant) -->
    <div class="flex-1 neumorphic-block p-2.5">
      <div class="neumorphic-inner h-full">
        <div class="h-full flex items-center justify-center">
          <p class="text-gray-500 text-lg">Contenu principal</p>
        </div>
      </div>
    </div>
    
    <!-- Section droite (vide pour l'instant) -->
    <div class="w-80 neumorphic-block p-2.5">
      <div class="neumorphic-inner h-full">
        <div class="h-full flex items-center justify-center">
          <p class="text-gray-500 text-lg">Sidebar droite</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
/* Bloc principal neumorphique - même design que le footer */
.neumorphic-block {
  background: #e0e0e0;
  border-radius: 12px;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.15),
              inset -2px -2px 4px rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  position: relative;
}

/* Intérieur qui ressort - même style que le footer ::before */
.neumorphic-inner {
  background: #e0e0e0;
  border-radius: 8px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15),
              -2px -2px 4px rgba(255, 255, 255, 0.9),
              inset 1px 1px 2px rgba(0, 0, 0, 0.1),
              inset -1px -1px 2px rgba(255, 255, 255, 0.9);
}

.neumorphic-block:hover {
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.18),
              inset -3px -3px 6px rgba(255, 255, 255, 0.95);
}

.neumorphic-block:hover .neumorphic-inner {
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.18),
              -3px -3px 6px rgba(255, 255, 255, 0.95),
              inset 2px 2px 4px rgba(0, 0, 0, 0.12),
              inset -2px -2px 4px rgba(255, 255, 255, 0.95);
}

/* Image de fond pour le personnage gaming */
.character-background {
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), 
              url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
