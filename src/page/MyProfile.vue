<script setup lang="ts">
import MyHeader from '@/components/My-Header.vue';
import AccountProfile from '@/components/AccountProfile.vue';
import { UserRole } from '@/types.ts';
import { useLocal } from '@/process/UseLocal.ts';
import { useRequirementAuthentication } from '@/hooks/useRequirementAuthentication.ts';

useLocal();
const isAuth = useRequirementAuthentication();
</script>

<template>
  <div v-if="isAuth">
    <my-header></my-header>
    <div class="flex justify-center mt-10 md:mt-[3.5rem] px-5">
      <account-profile
        :profile="{
          firstName: 'Денис',
          lastName: 'Квак',
          surname: 'Квакович',
          role: UserRole.STUDENT,
          birthday: '2010-05-10',
          class: '9-А',
          school: 'Гімназія № 143 ДМР',
        }"
      ></account-profile>
    </div>
  </div>
</template>

<style scoped></style>
