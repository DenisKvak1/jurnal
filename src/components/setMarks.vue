<script setup lang="ts">
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Mark, WeekDate } from '@/types.ts';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field';
import Label from '@/components/ui/label/Label.vue';
import { Ref, ref } from 'vue';
import { useRegionStore } from '@/store/RegionStore.ts';
import { PopoverClose } from 'radix-vue';
import { string } from 'zod';

type MarksData = {
  id: number;
  firstName: string;
  lastName: string;
  marks: Mark[];
};
const regionStore = useRegionStore();

const emit = defineEmits<{
  (
    event: 'update',
    data: {
      studentID: number;
      markIndex: number;
      value: Mark;
    }
  ): void;
}>();

const props = defineProps({
  marks: {
    required: true,
    type: Array as () => MarksData[],
  },
  weekDate: {
    required: true,
    type: Object as () => WeekDate,
  },
  subjectName: {
    required: false,
    type: String,
  },
});

const forms: Ref<Ref<number[]>[]> = ref([]);
props.marks?.forEach(() => {
  const startValue = Math.ceil(regionStore.maxMark / 2);
  const rawArray = [];
  for (let i = 0; i < props.marks[0].marks.length; i++) {
    rawArray.push(startValue);
  }
  forms.value.push(ref(rawArray));
});

function submitMarks(e: Event) {
  const target = e.target as HTMLElement;
  const studentIndex = +(target.getAttribute('data-student-index') as string);
  const markIndex = +(target.getAttribute('data-mark-index') as string);

  const mark = forms.value[studentIndex].value[markIndex];
  props.marks[studentIndex].marks[markIndex] = mark;

  emit('update', {
    studentID: props.marks[studentIndex].id,
    markIndex,
    value: mark,
  });
}

function submitH(e: Event) {
  const target = e.target as HTMLElement;
  const studentIndex = +(target.getAttribute('data-student-index') as string);
  const markIndex = +(target.getAttribute('data-mark-index') as string);

  props.marks[studentIndex].marks[markIndex] = 'H';

  emit('update', {
    studentID: props.marks[studentIndex].id,
    markIndex,
    value: 'H',
  });
}
</script>

<template>
  <h2 class="text-xl md:text-2xl font-semibold" v-if="props.subjectName">
    {{ props.subjectName }}
  </h2>
  <Table>
    <TableBody>
      <TableRow v-for="(student, studentIndex) in props.marks">
        <TableCell class="md:hidden p-[0.6rem] font-semibold w-100 md:text-lg"
          >{{ student.lastName }}
        </TableCell>
        <TableCell
          class="hidden md:table-cell p-[0.6rem] font-semibold w-100 md:text-lg"
        >
          <div class="flex flex-col">
            {{ student.firstName }}
            {{ student.lastName }}
          </div>
        </TableCell>
        <Popover v-for="(mark, markIndex) in student.marks">
          <PopoverTrigger as-child>
            <TableCell
              class="cursor-pointer md:text-base p-[0.6rem] w-[39.69px] md:w-[56.5px]"
            >
              <div class="flex items-center justify-center">
                {{ mark }}
              </div>
            </TableCell>
          </PopoverTrigger>
          <PopoverContent class="w-[187px]">
            <div>
              <NumberField
                v-model="forms[studentIndex].value[markIndex]"
                id="age"
                :default-value="Math.ceil(regionStore.maxMark / 2)"
                :min="1"
                :max="regionStore.maxMark"
              >
                <Label class="flex justify-center" for="age">Оценка</Label>
                <div class="flex items-center gap-3">
                  <PopoverClose>
                    <Button
                      :data-student-index="studentIndex"
                      :data-mark-index="markIndex"
                      @click="submitH"
                      >H
                    </Button>
                  </PopoverClose>
                  <NumberFieldContent class="w-[100px]">
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberFieldContent>
                </div>
              </NumberField>
            </div>
            <PopoverClose>
              <Button
                :data-student-index="studentIndex"
                :data-mark-index="markIndex"
                @click="submitMarks"
                class="w-full mt-2"
                >Подтвердить
              </Button>
            </PopoverClose>
          </PopoverContent>
        </Popover>
      </TableRow>
    </TableBody>
  </Table>
</template>

<style scoped></style>
