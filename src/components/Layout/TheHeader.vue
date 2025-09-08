<script setup lang="ts">
import { Search, Bell, MessageCircle, User, MoreVertical } from 'lucide-vue-next'
</script>

<template>
  <header class="h-20 px-5 grid grid-cols-4 gap-x-5 bg-gray-100 neumorphic-header">
    <!-- Logo Multi-couches avec q-button -->
    <div class="flex items-center">
      <div class="logo-container">
        <!-- Wrapper pour le logo multi-couches -->
        <div class="logo-outer-ring">
          <div class="logo-middle-ring">
            <div class="logo-inner-ring">
              <div class="logo-center">
                <img
                    src="/static/images/logo_svg.svg"
                    alt="This is the logo svg version for the alternative blancostory application"
                    class="w-6 h-6 object-contain"
                >
              </div>
            </div>
          </div>

          <!-- Indicateurs décoratifs autour -->
          <div class="logo-decorative-elements">
            <div class="decoration-line decoration-top"></div>
            <div class="decoration-line decoration-right"></div>
            <div class="decoration-line decoration-bottom"></div>
            <div class="decoration-line decoration-left"></div>
            <div class="decoration-line decoration-top-right"></div>
            <div class="decoration-line decoration-bottom-right"></div>
            <div class="decoration-line decoration-bottom-left"></div>
            <div class="decoration-line decoration-top-left"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Section avec q-input -->
    <div class="col-span-2 self-center neumorphic-search">
      <div class="search-icon-container">
        <Search class="w-4 h-4 text-gray-500" />
      </div>
      <input 
        type="text" 
        placeholder="Rechercher..." 
        class="neumorphic-input flex-1 bg-transparent border-none outline-none text-gray-600 placeholder-gray-400"
      />
    </div>

    <!-- Actions Section avec q-button -->
    <div class="flex items-center justify-self-end gap-x-4">
      <!-- Notification avec badge -->
      <div class="relative">
        <button class="neumorphic-button w-11 h-11 rounded-full flex items-center justify-center">
          <Bell class="w-5 h-5 text-gray-600" />
        </button>
        <div class="notification-badge">
          <span class="badge-text">3</span>
        </div>
      </div>

      <!-- Messages avec badge -->
      <div class="relative">
        <button class="neumorphic-button w-11 h-11 rounded-full flex items-center justify-center">
          <MessageCircle class="w-5 h-5 text-gray-600" />
        </button>
        <div class="notification-badge notification-badge-green">
          <span class="badge-text">7</span>
        </div>
      </div>

      <!-- Profile -->
      <button class="neumorphic-button w-11 h-11 rounded-full flex items-center justify-center">
        <User class="w-5 h-5 text-gray-600" />
      </button>

      <!-- Menu supplémentaire -->
      <button class="neumorphic-button w-11 h-11 rounded-full flex items-center justify-center">
        <MoreVertical class="w-5 h-5 text-gray-600" />
      </button>
    </div>
  </header>
</template>

<style scoped>
/* Header principal */
.neumorphic-header {
  background: #e0e0e0;
}

/* ============ STYLES POUR Q-BUTTON ============ */
.neumorphic-button {
  background: #e0e0e0 !important;
  border: none !important;
  border-radius: 50% !important;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15),
  -4px -4px 8px rgba(255, 255, 255, 0.9),
  inset 0 0 0 rgba(0, 0, 0, 0) !important;
  transition: all 0.2s ease !important;
}

.neumorphic-button:hover {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15),
  -2px -2px 4px rgba(255, 255, 255, 0.9),
  inset 1px 1px 2px rgba(0, 0, 0, 0.1),
  inset -1px -1px 2px rgba(255, 255, 255, 0.9) !important;
  transform: translateY(-1px) !important;
}

.neumorphic-button:active {
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.2),
  inset -3px -3px 6px rgba(255, 255, 255, 0.9) !important;
  transform: translateY(1px) !important;
}


/* ============ LOGO MULTI-COUCHES ============ */
.logo-container {
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.05);
}

/* Couche externe - La plus grande */
.logo-outer-ring {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15),
  -8px -8px 16px rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

/* Couche intermédiaire */
.logo-middle-ring {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.1),
  inset -4px -4px 8px rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Couche interne avec accent bleu */
.logo-inner-ring {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6b9bd2 0%, #5a8bc4 100%);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
  -2px -2px 4px rgba(255, 255, 255, 0.3),
  inset 1px 1px 2px rgba(255, 255, 255, 0.4),
  inset -1px -1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Centre du logo */
.logo-center {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1),
  -2px -2px 4px rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;
}

/* Éléments décoratifs autour du logo */
.logo-decorative-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.decoration-line {
  position: absolute;
  width: 2px;
  height: 8px;
  background: #e0e0e0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1),
  -1px -1px 2px rgba(255, 255, 255, 0.8);
  border-radius: 1px;
}

.decoration-top {
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
}

.decoration-bottom {
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
}

.decoration-left {
  left: 5px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
}

.decoration-right {
  right: 5px;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
}

.decoration-top-right {
  top: 12px;
  right: 12px;
  transform: rotate(45deg);
}

.decoration-top-left {
  top: 12px;
  left: 12px;
  transform: rotate(-45deg);
}

.decoration-bottom-right {
  bottom: 12px;
  right: 12px;
  transform: rotate(-45deg);
}

.decoration-bottom-left {
  bottom: 12px;
  left: 12px;
  transform: rotate(45deg);
}

/* ============ SEARCH BAR ============ */
.neumorphic-search {
  background: #e0e0e0;
  border-radius: 10px;
  padding: 8px 16px;
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.15),
  inset -3px -3px 6px rgba(255, 255, 255, 0.9);
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-icon-container {
  background: #e0e0e0;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1),
  -2px -2px 4px rgba(255, 255, 255, 0.8);
  flex-shrink: 0;
}

.neumorphic-input {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  flex: 1;
}

/* ============ NOTIFICATION BADGES ============ */
.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #ff4757, #ff3742);
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
  -1px -1px 2px rgba(255, 255, 255, 0.3),
  inset 0.5px 0.5px 1px rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.notification-badge-green {
  background: linear-gradient(135deg, #2ed573, #20bf6b);
}

.badge-text {
  color: white;
  font-size: 10px;
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}


/* ============ ANIMATIONS ============ */
@keyframes logo-pulse {
  0%, 100% {
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15),
    -8px -8px 16px rgba(255, 255, 255, 0.9);
  }
  50% {
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.12),
    -6px -6px 12px rgba(255, 255, 255, 0.95);
  }
}

.logo-container:hover .logo-outer-ring {
  animation: logo-pulse 2s infinite;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 768px) {
  .logo-container {
    width: 60px;
    height: 60px;
  }

  .logo-outer-ring {
    width: 60px;
    height: 60px;
  }

  .logo-middle-ring {
    width: 45px;
    height: 45px;
  }

  .logo-inner-ring {
    width: 34px;
    height: 34px;
  }

  .logo-center {
    width: 24px;
    height: 24px;
  }

  .neumorphic-button {
    width: 36px !important;
    height: 36px !important;
  }

  .gap-x-4 {
    gap: 0.75rem;
  }
}
</style>