<template>
  <div class="slidev-layout intro-layout">
    <!-- Background Image -->
    <div
      v-if="$slidev.nav.currentLayout === 'intro' && $frontmatter.background"
      class="absolute inset-0 z-0"
      :style="{ backgroundImage: `url(${$frontmatter.background})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    />
    <div v-else class="absolute inset-0 z-0 bg-gradient-to-br from-blue-900 to-blue-700" />

    <!-- Overlay for better text readability -->
    <div
      class="absolute inset-0 z-1 bg-black"
      :style="{ opacity: $frontmatter.backgroundOpacity ?? 0.6 }"
    />

    <!-- Content Container -->
    <div class="relative z-10 h-full flex flex-col justify-between p-12">

      <!-- Main Content - Middle Left -->
      <div class="flex-1 flex items-center">
        <div class="max-w-3xl">
          <!-- Title -->
          <h1
            class="text-6xl font-bold mb-6 leading-tight"
            :style="{ color: $frontmatter.textColor || '#ffffff' }"
          >
            {{ $frontmatter.title }}
          </h1>

          <!-- Separator Line -->
          <div
            class="w-32 h-0.5 mb-8"
            style="background-color: #c179fb"
          />

          <!-- Occasion -->
          <div v-if="$frontmatter.occasion" class="mb-6">
            <p
              class="text-xl font-medium"
              :style="{ color: $frontmatter.textColor || '#e5e7eb' }"
            >
              {{ $frontmatter.occasion }}
            </p>
          </div>

          <!-- Authors -->
          <div v-if="$frontmatter.authors" class="mb-4">
            <p
              class="text-2xl font-semibold"
              :style="{ color: $frontmatter.textColor || '#e5e7eb' }"
            >
              <template v-if="Array.isArray($frontmatter.authors)">
                {{ $frontmatter.authors.join(', ') }}
              </template>
              <template v-else>
                {{ $frontmatter.authors }}
              </template>
            </p>
          </div>

          <!-- Co-Authors -->
          <div v-if="$frontmatter.coAuthors" class="mb-4">
            <p
              class="text-xl"
              :style="{ color: $frontmatter.textColor || '#d1d5db' }"
            >
              <span class="font-semibold">Supervisor: </span>
              <template v-if="Array.isArray($frontmatter.coAuthors)">
                {{ $frontmatter.coAuthors.join(', ') }}
              </template>
              <template v-else>
                {{ $frontmatter.coAuthors }}
              </template>
            </p>
          </div>

          <!-- Date -->
          <div v-if="$frontmatter.date" class="mb-2">
            <p
              class="text-lg"
              :style="{ color: $frontmatter.textColor || '#d1d5db' }"
            >
              {{ $frontmatter.date }}
            </p>
          </div>
        </div>
      </div>

      <!-- Logos - Lower Left Corner -->
      <div v-if="$frontmatter.logos && $frontmatter.logos.length > 0" class="flex gap-6 items-end">
        <div
          v-for="(logo, index) in $frontmatter.logos"
          :key="index"
          class="logo-container"
        >
          <img
            :src="logo"
            :alt="`Logo ${index + 1}`"
            class="h-16 w-auto object-contain filter drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-layout {
  @apply w-full h-full relative overflow-hidden;
}

.logo-container {
  background: rgba(255, 255, 255, 0.9);
  padding: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo-container img {
  max-height: 4rem;
  height: auto;
  width: auto;
}
</style>
