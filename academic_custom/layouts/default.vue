<template>
  <div class="slidev-layout default w-full h-full">
    <!-- Title Section with Separator -->
    <div v-if="$frontmatter.title" class="title-container mb-8">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        {{ $frontmatter.title }}
      </h2>
      <div class="separator" style="background-color: #c179fb" />
    </div>

    <!-- Content -->
    <slot />
  </div>
</template>

<style scoped>
.default {
  @apply px-12 py-12 pb-12 bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100;
}

.title-container {
  width: fit-content;
}

.separator {
  width: 100%;
  height: 2px;
}

.default :deep(ul),
.default :deep(ol) {
  list-style-position: outside;
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.default :deep(ul) {
  list-style-type: disc;
}

.default :deep(ol) {
  list-style-type: decimal;
}

.default :deep(li) {
  margin: 0.5rem 0;
  line-height: 1.6;
}
</style>
