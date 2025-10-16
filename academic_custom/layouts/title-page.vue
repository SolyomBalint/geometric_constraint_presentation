<template>
  <div class="slidev-layout title-page-layout">
    <!-- Right Side: Background Image -->
    <div
      class="right-section bg-gray-200 dark:bg-gray-800"
      :class="{ 'right-section-fit': $frontmatter.backgroundMode === 'fit' }"
      :style="{
        backgroundImage: $frontmatter.background ? `url(${withBase($frontmatter.background)})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }"
    />

    <!-- Left Side: Title Content -->
    <div class="left-section bg-white dark:bg-[#444444]">
      <div class="p-12 h-full flex flex-col justify-center">
        <!-- Title -->
        <div class="title-container">
          <h1 class="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ $frontmatter.title }}
          </h1>

          <!-- Separator Line -->
          <div class="separator" style="background-color: #c179fb" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Helper function to prepend base URL to paths
const withBase = (path: string) => {
  if (!path) return path
  const base = import.meta.env.BASE_URL
  // Remove leading slash from path to avoid double slashes
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return base + normalizedPath
}
</script>

<style scoped>
.title-page-layout {
  @apply w-full h-full relative overflow-hidden;
}

.left-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 55%;
  height: 100%;
  clip-path: polygon(0 0, calc(100% - 100px) 0, 100% 100%, 0 100%);
  z-index: 2;
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
}

.right-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.right-section-fit {
  left: calc(55% - 100px);
  width: calc(45% + 100px);
  clip-path: polygon(100px 0, 100% 0, 100% 100%, 0 100%);
}

.title-container {
  width: fit-content;
}

.separator {
  width: 100%;
  height: 2px;
}
</style>
