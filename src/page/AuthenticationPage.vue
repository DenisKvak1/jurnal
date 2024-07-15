<script setup lang="ts">
import AuthenticationForm from '@/components/AuthenticationForm.vue';
import MyHeader from '@/components/My-Header.vue';
import { useLocal } from '@/process/UseLocal.ts';
import { useRequirementAuthentication } from '@/hooks/useRequirementAuthentication.ts';

useLocal();
const isAuth = useRequirementAuthentication(true);
</script>

<template>
  <div v-if="isAuth" class="h-screen">
    <MyHeader></MyHeader>
    <div class="flex justify-center mt-10 md:mt-[3.5rem] px-2 md:px-5">
      <authentication-form
        @login="(values) => console.log(values)"
      ></authentication-form>
    </div>
  </div>
</template>

<style scoped></style>
