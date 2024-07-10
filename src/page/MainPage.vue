<script setup lang="ts">
import { ref } from 'vue';
import { useLocal } from '@/process/UseLocal.ts';
import MyHeader from '@/components/My-Header.vue';
import SetMarks from '@/components/setMarks.vue';

useLocal();

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

const marks = ref([
  {
    firstName: 'Денис',
    lastName: 'Квак',
    marks: [1, 2, 'H', '', 1, 10, 4],
  },
  {
    firstName: 'Денис',
    lastName: 'Замикула',
    marks: [1, 2, 'H', '', 1, 10, 4],
  },
  {
    firstName: 'Денис',
    lastName: 'Замикула',
    marks: [1, 2, 'H', 1, 1, 10, 4],
  },
]);
</script>

<template>
  <MyHeader></MyHeader>
  <div class="lg:w-[680px]">
    <set-marks
      :subject-name="'Математика'"
      :marks="marks as any"
      :week-date="{ startWeekTIMESTAMP: '2024-07-09T08:40:43+00:00' }"
    ></set-marks>
    <!--        <MyDiary :date="'2024-07-08T16:17:12+00:00'" :lessons="les" />-->
  </div>
</template>

<style scoped></style>
