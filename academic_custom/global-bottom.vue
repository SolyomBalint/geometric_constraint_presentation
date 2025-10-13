<template>
  <footer
    v-if="shouldShowFooter"
    class="absolute bottom-0 left-0 right-0 h-8 px-8 flex items-center justify-between z-50 border-t footer-style"
  >
    <!-- Left: Presentation Title -->
    <div class="text-xs font-medium flex-1 truncate">
      {{ $slidev.configs.footerTitle }}
    </div>

    <!-- Center: Slide Counter -->
    <div class="text-xs font-semibold px-6">
      {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
    </div>

    <!-- Right: Occasion -->
    <div class="text-xs font-medium flex-1 text-right truncate">
      {{ $slidev.configs.footerOccasion }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const shouldShowFooter = computed(() => {
  // Don't show footer on intro, toc, and title-page layouts
  const excludedLayouts = ['intro', 'toc', 'title-page']
  return !excludedLayouts.includes($slidev.nav.currentLayout)
})
</script>

<style scoped>
.footer-style {
  background-color: var(--color-bg-main);
  border-color: var(--color-text-light);
  color: var(--color-text-light);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

html.dark .footer-style {
  border-color: var(--color-text-dark);
  color: var(--color-text-dark);
}
</style>
