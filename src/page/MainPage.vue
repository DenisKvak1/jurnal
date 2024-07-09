<script setup lang="ts">
import MyDiary from '@/components/My-DiaryElement.vue';
import { ref } from 'vue';
import { useLocal } from '@/process/UseLocal.ts';

useLocal()

const les = ref([
  {
    id: 123,
    lessonId: 1,
    callStart: '8:45',
    callEnd: '9:45',
    name: 'Урок урока',
    cabinet: 'Кабинет урока уроковича',
    current: 'Изучение урока',
    homeWork: 'Домашука урока уроковича',
    mark: 2,
  },
  {
    id: 5,
    lessonId: 2,
    callStart: '8:45',
    callEnd: '9:45',
    name: '212qwdadwa',
    cabinet: '3',
    current: '4',
    homeWork: '5',
    mark: 9,
  },
  {
    id: 45,
    lessonId: 3,
    callStart: '8:45',
    callEnd: '78:45',
    name: '31321dsa',
    cabinet: 'Кабінеxzxxcz ії[36]',
    current: '44',
    homeWork: '44',
    mark: 6,
  },
  {
    id: 1,
    lessonId: 4,
    callStart: '8:45',
    callEnd: '9:45',
    name: '31321dsa',
    cabinet: 'Кабінет географії[36]',
    current: '5',
    homeWork: '6',
    mark: 10,
  },
]);
</script>

<template>
  <div class="lg:w-[800px]">
    <MyDiary :date="'2024-07-08T16:17:12+00:00'" :lessons="les" />
  </div>
</template>

<style scoped></style>
