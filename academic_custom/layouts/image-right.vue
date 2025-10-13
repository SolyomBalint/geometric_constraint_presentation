<template>
  <div class="slidev-layout image-right w-full h-full">
    <!-- Title Section with Separator -->
    <div v-if="$frontmatter.title" class="title-container mb-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {{ $frontmatter.title }}
      </h2>
      <div class="separator" style="background-color: #c179fb" />
    </div>

    <!-- Two Column Layout -->
    <div class="content-grid" :style="{ gridTemplateColumns: columnTemplate }">
      <!-- Left Side: Text Content -->
      <div class="text-content">
        <slot />
      </div>

      <!-- Right Side: Images -->
      <div class="image-content" :class="imageLayoutClass">
        <div
          v-for="(image, index) in images"
          :key="index"
          v-click
          class="image-wrapper"
        >
          <img
            :src="image"
            :alt="`Image ${index + 1}`"
            class="rounded-lg shadow-lg w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const images = computed(() => {
  const imgs = $frontmatter.images
  if (!imgs) return []
  return Array.isArray(imgs) ? imgs : [imgs]
})

const imageLayoutClass = computed(() => {
  const layout = $frontmatter.imageLayout || 'vertical'
  return layout === 'horizontal' ? 'layout-horizontal' : 'layout-vertical'
})

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
.image-right {
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

.text-content {
  overflow-y: auto;
  padding-right: 1rem;
}

.text-content :deep(ul),
.text-content :deep(ol) {
  list-style-position: outside;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.text-content :deep(ul) {
  list-style-type: disc;
}

.text-content :deep(ol) {
  list-style-type: decimal;
}

.text-content :deep(li) {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.image-content {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-top: 1rem;
  overflow: hidden;
}

.layout-vertical {
  flex-direction: column;
}

.layout-horizontal {
  flex-direction: row;
}

.image-wrapper {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  min-width: 0;
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
