<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { DiaryDayElement } from '@/types.ts';
import { getDayOfWeek } from '@internationalized/date';
import { useRegionStore } from '@/store/RegionStore.ts';
import { getDayOfWeekString } from '../helpers/formatTime.ts';
import { computed } from 'vue';

const regionStore = useRegionStore()
const props = defineProps({
  timeTable: {
    required: true,
    type: Array as () => DiaryDayElement[],
  },
});

</script>

<template>
  <div>
    <Carousel>
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
                  <span class="font-medium">{{subject.callStart}}</span>
                  <span class="font-medium">{{subject.callEnd}}</span>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="font-medium text-lg"> {{ subject.name }} </span>
                  <span class="text-sm text-[#6b4cff] dark:text-[#646464]">
                    {{subject.teacher}}
                  </span>
                  <span class="text-sm"> {{ subject.cabinet}} </span>
                </div>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

<style scoped></style>
