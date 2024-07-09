<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Lesson } from '@/types.ts';
import { formatLocalizedDate } from '../helpers/formatTime.ts';
import { useRegionStore } from '@/store/RegionStore.ts';

const regionStore = useRegionStore();

const props = defineProps({
  lessons: {
    required: true,
    type: Array as () => Lesson[],
  },
  date: {
    required: false,
    type: String,
  },
});

function getMarkCoof(mark: number) {
  return Math.ceil(mark / (regionStore.maxMark / 4));
}
</script>

<template>
  <div>
    <span
      v-if="props.date"
      class="text-lg lg:text-xl xl:text-2xl font-semibold mb-2 block"
      >{{ formatLocalizedDate(props.date, regionStore.region) }}</span
    >
    <Table>
      <TableHeader class="hidden lg:table-header-group">
        <TableRow class="text-base">
          <TableHead> №</TableHead>
          <TableHead> {{ $t('diary.calls') }} </TableHead>
          <TableHead> {{ $t('diary.subjectName') }}</TableHead>
          <TableHead> {{ $t('diary.task') }}</TableHead>
          <TableHead> {{ $t('diary.mark') }}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow
          class="xl:text-base"
          v-for="lesson in props.lessons"
          :key="lesson.id"
        >
          <TableCell class="font-medium p-2 md:p-4">
            {{ lesson.lessonId }}
          </TableCell>
          <TableCell class="p-2 md:p-4">
            <div class="flex flex-col">
              <span>{{ lesson.callStart }}</span>
              <span>{{ lesson.callEnd }}</span>
            </div>
          </TableCell>
          <TableCell class="break-words">
            <div class="flex flex-col">
              <span class="font-medium">{{ lesson.name }}</span>
              <span class="text-blue-600">{{ lesson.cabinet }}</span>
            </div>
          </TableCell>
          <TableCell class="w-full">
            <div class="flex flex-col">
              <span
                ><span class="font-medium">{{ $t('diary.current') }}:</span>
                {{ lesson.current }}</span
              >
              <span
                ><span class="font-medium">{{ $t('diary.homeWork') }}: </span>
                {{ lesson.homeWork }}</span
              >
            </div>
          </TableCell>
          <TableCell>
            <div
              :class="{
                mark__perfect: getMarkCoof(lesson.mark) >= 4,
                mark__good: getMarkCoof(lesson.mark) === 3,
                mark__norm: getMarkCoof(lesson.mark) === 2,
                mark__bad: getMarkCoof(lesson.mark) === 1,
              }"
              class="font-semibold text-base md:text-lg w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex justify-center items-center rounded-md md:rounded-lg"
            >
              {{ lesson.mark }}
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>

<style scoped>
.mark__perfect {
  background: #2b8716;
}

.mark__good {
  background: #7aca6d;
}

.mark__norm {
  background: #f07427;
}

.mark__bad {
  background: #b80400;
}
</style>
