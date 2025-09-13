<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

// Props
interface Props {
  modelValue?: Date
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => new Date()
})

// Emits
const emit = defineEmits<{
  'update:modelValue': [date: Date]
}>()

// État local
const currentDate = ref(new Date(props.modelValue))
const selectedDate = ref(new Date(props.modelValue))

// Computed
const currentMonth = computed(() => currentDate.value.getMonth())
const currentYear = computed(() => currentDate.value.getFullYear())

const monthName = computed(() => {
  return new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(currentDate.value)
})

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
})

const firstDayOfMonth = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1).getDay()
  return firstDay === 0 ? 6 : firstDay - 1 // Lundi = 0
})

const calendarDays = computed(() => {
  const days = []
  
  // Jours du mois précédent
  const prevMonth = new Date(currentYear.value, currentMonth.value - 1, 0)
  const prevMonthDays = prevMonth.getDate()
  
  for (let i = firstDayOfMonth.value - 1; i >= 0; i--) {
    days.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      isPrevMonth: true,
      date: new Date(currentYear.value, currentMonth.value - 1, prevMonthDays - i)
    })
  }
  
  // Jours du mois actuel
  for (let i = 1; i <= daysInMonth.value; i++) {
    days.push({
      day: i,
      isCurrentMonth: true,
      isPrevMonth: false,
      date: new Date(currentYear.value, currentMonth.value, i)
    })
  }
  
  // Jours du mois suivant
  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      day: i,
      isCurrentMonth: false,
      isPrevMonth: false,
      date: new Date(currentYear.value, currentMonth.value + 1, i)
    })
  }
  
  return days
})

// Méthodes
const previousMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1)
}

const selectDate = (date: Date) => {
  selectedDate.value = new Date(date)
  currentDate.value = new Date(date.getFullYear(), date.getMonth(), 1)
  emit('update:modelValue', new Date(date))
}

const isToday = (date: Date) => {
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

const isSelected = (date: Date) => {
  return date.toDateString() === selectedDate.value.toDateString()
}
</script>

<template>
  <div class="calendar-container">
    <!-- Header avec navigation -->
    <div class="flex items-center justify-between mb-4">
      <button @click="previousMonth" class="calendar-nav-btn">
        <ChevronLeft class="w-4 h-4" />
      </button>
      
      <h4 class="text-lg font-semibold text-gray-700 capitalize">
        {{ monthName }} {{ currentYear }}
      </h4>
      
      <button @click="nextMonth" class="calendar-nav-btn">
        <ChevronRight class="w-4 h-4" />
      </button>
    </div>
    
    <!-- Grille du calendrier -->
    <div class="calendar-grid">
      <!-- Jours de la semaine -->
      <div v-for="day in ['L', 'M', 'M', 'J', 'V', 'S', 'D']" 
           :key="day" 
           class="calendar-weekday">
        {{ day }}
      </div>
      
      <!-- Jours du mois -->
      <button v-for="dayObj in calendarDays" 
              :key="`${dayObj.date.getTime()}`"
              @click="selectDate(dayObj.date)"
              class="calendar-day"
              :class="{
                'current-month': dayObj.isCurrentMonth,
                'other-month': !dayObj.isCurrentMonth,
                'today': isToday(dayObj.date),
                'selected': isSelected(dayObj.date)
              }">
        {{ dayObj.day }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.calendar-container {
  @apply w-full h-full flex flex-col;
}

.calendar-nav-btn {
  @apply w-8 h-8 rounded-full flex items-center justify-center text-gray-600 transition-all duration-200;
  background: #e0e0e0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1),
              -2px -2px 4px rgba(255, 255, 255, 0.8);
}

.calendar-nav-btn:hover {
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1),
              inset -1px -1px 2px rgba(255, 255, 255, 0.8);
  @apply text-gray-700;
}

.calendar-grid {
  @apply grid grid-cols-7 gap-1 flex-1;
}

.calendar-weekday {
  @apply text-center text-gray-500 text-sm font-medium p-2;
}

.calendar-day {
  @apply w-full h-8 text-sm rounded-lg transition-all duration-200 flex items-center justify-center;
  background: #e0e0e0;
}

.calendar-day.current-month {
  @apply text-gray-700 cursor-pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1),
              -1px -1px 2px rgba(255, 255, 255, 0.8);
}

.calendar-day.other-month {
  @apply text-gray-400 cursor-pointer opacity-50;
}

.calendar-day:hover.current-month {
  @apply text-gray-800;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1),
              inset -1px -1px 2px rgba(255, 255, 255, 0.8);
}

.calendar-day.today {
  @apply text-blue-600 font-bold;
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
}

.calendar-day.selected {
  @apply text-white font-bold;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2),
              2px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>