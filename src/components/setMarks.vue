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

type MarksData = {
  firstName: string;
  lastName: string;
  marks: Mark[];
};

const props = defineProps({
  marks: {
    required: true,
    type: Array as () => MarksData[],
  },
  weekDate: {
    required: true,
    type: Object as () => WeekDate,
  },
});

function submitMarks(e: Event){

}

</script>

<template>
  <Table>
    <TableBody>
      <TableRow v-for="student in props.marks">
        <TableCell class="p-[0.6rem] font-semibold w-100"
          >{{ student.lastName }}
        </TableCell>
        <Popover v-for="mark in student.marks">
          <PopoverTrigger as-child>
            <TableCell class="p-[0.6rem] w-[39.69px]">{{ mark }}</TableCell>
          </PopoverTrigger>
          <PopoverContent class="w-[187px]">
            <div>
              <NumberField id="age" :default-value="6" :min="1" :max="12">
                <Label class="flex justify-center" for="age">Оценка</Label>
                <div class="flex items-center gap-3">
                  <Button>H</Button>
                  <NumberFieldContent class="w-[100px]">
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberFieldContent>
                </div>
              </NumberField>
            </div>
            <Button class="w-full mt-2">Подтвердить</Button>
          </PopoverContent>
        </Popover>
      </TableRow>
    </TableBody>
  </Table>
</template>

<style scoped></style>
