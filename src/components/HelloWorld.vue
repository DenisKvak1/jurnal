<template>
  <div>
    <div>
      <MyHeader />
    </div>

    <div class="flex-auto ">
      <div class="container mx-auto px-4 py-8 ">
        <h1 class="text-2xl font-bold mb-4">Your Content Here</h1>
        <p v-for="key in 70">This is your main content area. You can add more components and content here.</p>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import MyHeader from '@/components/My-Header.vue';
</script>

<style scoped>
/* Add scoped styles for your content block if needed */
</style>
