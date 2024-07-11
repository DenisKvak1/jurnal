<script setup lang="ts">
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { DiaryDayElement } from '@/types.ts';
import { useRegionStore } from '@/store/RegionStore.ts';
import { getDayOfWeekString } from '../helpers/formatTime.ts';
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';

const { width } = useWindowSize();
const regionStore = useRegionStore();
const props = defineProps({
    timeTable: {
        required: true,
        type: Array as () => DiaryDayElement[],
    },
});

function findLongestSubjectsArray(objects: DiaryDayElement[]): any[] {
    return objects.reduce((longest, current) => {
        return current.subjects.length > longest.length ? current.subjects : longest;
    }, [] as any[]);
}


</script>

<template>
    <div>
        <Carousel v-if="width < 1024">
            <CarouselContent>
                <CarouselItem v-for="dayElement in props.timeTable">
                    <div class="flex flex-col gap-1">
                        <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                            {{ computed(() => getDayOfWeekString(dayElement.date, regionStore.language)) }}
                        </h4>
                        <div class="flex flex-col last-of-type:border-b">
                            <div
                                class="flex items-center border-t p-3 border-l border-r"
                                v-for="(subject, index) in dayElement.subjects"
                            >
                                <div class="w-[30px]">
                                    {{ index + 1 }}
                                </div>
                                <div class="w-[60px] flex flex-col gap-1">
                                    <span class="font-medium">{{ subject.callStart }}</span>
                                    <span class="font-medium">{{ subject.callEnd }}</span>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <span class="font-medium text-lg"> {{ subject.name }} </span>
                                    <span class="text-sm text-[#6b4cff] dark:text-[#646464]">
                    {{ subject.teacher }}
                  </span>
                                    <span class="text-sm"> {{ subject.cabinet }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
        <Table v-if="width >= 1024">
            <TableHeader>

            </TableHeader>
            <TableBody>
                <TableRow v-for="(day, dayIndex) in findLongestSubjectsArray(props.timeTable)">
                    <TableCell class="w-[120px] lg:w-[160px]">
                        <div class="flex justify-between">
                            <div class="flex flex-col">
                                <span class="text-base font-medium">{{ day.callStart }}</span>
                                <span class="text-base font-medium">{{ day.callEnd }}</span>
                            </div>
                            <span class="text-base font-medium">
                                {{ dayIndex + 1 }}
                            </span>
                        </div>
                    </TableCell>
                    <TableCell v-for="index in 7" class="w-[160px]">
                        <div class="flex flex-col gap-1">
                            <span class="text-base"> {{ props.timeTable[index-1]?.subjects[dayIndex]?.name }} </span>
                            <span
                                class="text-[#6b4cff] dark:text-[#646464]"> {{ props.timeTable[index-1]?.subjects[dayIndex]?.teacher }}</span>
                            <span> {{ props.timeTable[index-1]?.subjects[dayIndex]?.cabinet }}</span>
                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</template>

<style scoped></style>
