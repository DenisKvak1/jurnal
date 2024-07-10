<script setup lang="ts">
import { ref } from 'vue';
import { useLocal } from '@/process/UseLocal.ts';
import MyHeader from '@/components/My-Header.vue';
import SetMarks from '@/components/setMarks.vue';
import DiaryElement from '@/components/DiaryElement.vue';
import TimeTable from '@/components/TimeTable.vue';

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
const days = ref([
    {
        id: 1,
        date: '01.06.24',
        subjects: [
            {
                id: 123,
                lessonId: 1,
                callStart: '8:45',
                callEnd: '9:45',
                name: 'Урок урока',
                cabinet: 'Кабинет урока уроковича',
                current: 'Изучение урока',
                homeWork: 'Домашука урока уроковича',
                teacher: 'Клавида петровна',
                mark: 2,
            },
            {
                id: 5,
                lessonId: 2,
                callStart: '8:45',
                callEnd: '9:45',
                name: '212qwdadwa',
                cabinet: '3',
                teacher: 'Клавида петровна2',
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
                teacher: 'Клавида петровна4',
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
                teacher: 'Клавида петровна6',
                homeWork: '6',
                mark: 10,
            },
        ]
    },
    {
        id: 2,
        date: '02.06.24',
        subjects: [
            {
                id: 123,
                lessonId: 1,
                callStart: '8:45',
                callEnd: '9:45',
                name: 'Урок урока',
                cabinet: 'Кабинет урока уроковича',
                current: 'Изучение урока',
                teacher: 'Клавида петровна',
                homeWork: 'Домашука урока уроковича',
                mark: 2,
            },
            {
                id: 5,
                lessonId: 2,
                callStart: '8:45',
                callEnd: '9:45',
                name: '212qwdadwa',
                teacher: 'Клавида петровна',
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
                teacher: 'Клавида петровна',
                current: '44',
                homeWork: '44',
                mark: 6,
            },
            {
                id: 1,
                lessonId: 4,
                callStart: '8:45',
                callEnd: '9:45',
                teacher: 'Клавида петровна',
                name: '31321dsa',
                cabinet: 'Кабінет географії[36]',
                current: '5',
                homeWork: '6',
                mark: 10,
            },
        ]
    },
    {
        id: 3,
        date: '03.06.24',
        subjects: [
            {
                teacher: 'Клавида петровна',
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
                teacher: 'Клавида петровна',
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
                teacher: 'Клавида петровна',
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
                teacher: 'Клавида петровна',
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
        ]
    }
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
    <div class="px-4">
        <TimeTable :timeTable="days"></TimeTable>
    </div>
<!--    <div class="lg:w-[680px]">-->
<!--        <DiaryElement :date="'24-07-08T16:17:12+00:00'" :lessons="les" />-->
<!--        <set-marks-->
<!--            class="mt-5"-->
<!--            :subject-name="'Математика'"-->
<!--            :marks="marks as any"-->
<!--            :week-date="{ startWeekTIMESTAMP: '24-07-09T08:40:43+00:00' }"-->
<!--        ></set-marks>-->
<!--    </div>-->
</template>

<style scoped></style>
