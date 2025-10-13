<template>
  <div class="slidev-layout toc-layout">
    <!-- Right Side: Background Image -->
    <div
      class="right-section bg-gray-200 dark:bg-gray-800"
      :class="{ 'right-section-fit': $frontmatter.backgroundMode === 'fit' }"
      :style="{
        backgroundImage: $frontmatter.background ? `url(${$frontmatter.background})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }"
    />

    <!-- Left Side: TOC Content -->
    <div class="left-section bg-white dark:bg-[#444444]">
      <div class="p-12 h-full flex flex-col">
        <!-- Title -->
        <div class="mb-8">
          <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ $frontmatter.tocTitle || 'Table of Contents' }}
          </h1>

          <!-- Separator Line -->
          <div class="w-32 h-0.5" style="background-color: #c179fb" />
        </div>

        <!-- Table of Contents Items -->
        <div class="flex-1 flex items-center overflow-y-auto">
          <div class="w-full max-w-2xl">
            <ul :class="($frontmatter.tocItems?.length || 0) > 8 ? 'space-y-2' : ($frontmatter.tocItems?.length || 0) > 5 ? 'space-y-3' : 'space-y-4'">
              <li
                v-for="(item, index) in $frontmatter.tocItems"
                :key="index"
                class="flex items-start gap-4"
              >
                <span
                  :class="($frontmatter.tocItems?.length || 0) > 8 ? 'text-xl' : ($frontmatter.tocItems?.length || 0) > 5 ? 'text-2xl' : 'text-3xl'"
                  class="font-bold flex-shrink-0 w-12"
                  :style="{ color: $frontmatter.accentColor || '#c179fb' }"
                >
                  {{ index + 1 }}.
                </span>
                <span
                  :class="($frontmatter.tocItems?.length || 0) > 8 ? 'text-xl' : ($frontmatter.tocItems?.length || 0) > 5 ? 'text-2xl' : 'text-3xl'"
                  class="font-medium text-gray-900 dark:text-gray-100"
                >
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toc-layout {
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

.diagonal-separator {
  position: absolute;
  top: 0;
  left: calc(55% - 100px);
  width: 100px;
  height: 100%;
  pointer-events: none;
  z-index: 3;
  background: linear-gradient(to bottom right,
    transparent calc(50% - 2px),
    rgba(59, 130, 246, 0.8) calc(50% - 2px),
    rgba(59, 130, 246, 0.8) calc(50% + 2px),
    transparent calc(50% + 2px)
  );
  transform: skewX(-10deg);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  transition: transform 0.2s ease;
}
</style>
