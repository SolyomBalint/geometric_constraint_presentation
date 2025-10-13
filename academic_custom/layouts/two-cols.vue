<template>
  <div class="slidev-layout two-cols w-full h-full">
    <!-- Title Section with Separator -->
    <div v-if="$frontmatter.title" class="title-container mb-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {{ $frontmatter.title }}
      </h2>
      <div class="separator" style="background-color: #c179fb" />
    </div>

    <!-- Two Column Layout -->
    <div class="content-grid" :style="{ gridTemplateColumns: columnTemplate }">
      <!-- Left Column -->
      <div class="column-content">
        <slot />
      </div>

      <!-- Right Column -->
      <div class="column-content">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const columnTemplate = computed(() => {
  // Priority 1: Direct grid template specification
  if ($frontmatter.gridColumns) {
    return $frontmatter.gridColumns
  }

  // Priority 2: Left column width as percentage
  if ($frontmatter.leftColumnWidth) {
    const leftWidth = parseInt($frontmatter.leftColumnWidth)
    const rightWidth = 100 - leftWidth
    return `${leftWidth}% ${rightWidth}%`
  }

  // Priority 3: Column ratio (e.g., "2:1" or "1:2")
  if ($frontmatter.columnRatio) {
    const [left, right] = $frontmatter.columnRatio.split(':').map(Number)
    if (left && right) {
      return `${left}fr ${right}fr`
    }
  }

  // Default: 50-50 split
  return '1fr 1fr'
})
</script>

<style scoped>
.two-cols {
  @apply px-12 py-12 pb-12 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100;
}

.title-container {
  width: fit-content;
}

.separator {
  width: 100%;
  height: 2px;
}

.content-grid {
  display: grid;
  gap: 3rem;
  height: calc(100% - 5rem);
  align-items: start;
}

.column-content {
  overflow-y: auto;
  padding-right: 1rem;
}

.column-content :deep(ul),
.column-content :deep(ol) {
  list-style-position: outside;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.column-content :deep(ul) {
  list-style-type: disc;
}

.column-content :deep(ol) {
  list-style-type: decimal;
}

.column-content :deep(li) {
  margin: 0.5rem 0;
  line-height: 1.6;
}
</style>
