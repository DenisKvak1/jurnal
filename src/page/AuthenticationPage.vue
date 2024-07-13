<script setup lang="ts">
import AuthenticationForm from '@/components/ui/AuthenticationForm.vue';
import MyHeader from '@/components/My-Header.vue';
import { useLocal } from '@/process/UseLocal.ts';

useLocal();
</script>

<template>
  <div class="h-screen">
    <MyHeader></MyHeader>
    <div class="flex justify-center mt-10 md:mt-[3.5rem] px-2 md:px-5">
      <authentication-form></authentication-form>
    </div>
  </div>
</template>

<style scoped></style>