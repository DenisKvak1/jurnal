<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {Mark, WeekDate} from '@/types.ts';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {Button} from '@/components/ui/button';
import {
    NumberField,
    NumberFieldContent,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput,
} from '@/components/ui/number-field';
import Label from '@/components/ui/label/Label.vue';
import {onMounted, Ref, ref} from 'vue';
import {useRegionStore} from '@/store/RegionStore.ts';
import {PopoverClose} from 'radix-vue';
import {generateDateArray} from '@/helpers/formatTime.ts';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {stringToMark} from "@/helpers/toMark.ts";

type MarksData = {
    id: number;
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
    subjectName: {
        required: false,
        type: String,
    },
});

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

const regionStore = useRegionStore();
const selectMode = ref('popap');
const dateArray = ref(generateDateArray(props.weekDate?.startWeekTIMESTAMP));

const formsNumber: Ref<Ref<number[]>[]> = ref([]);

props.marks?.forEach(() => {
    const startValue = Math.ceil(regionStore.maxMark / 2);
    const rawArray = [];
    for (let i = 0; i < props.marks[0].marks.length; i++) {
        rawArray.push(startValue);
    }
    formsNumber.value.push(ref(rawArray));
});


function submitMarks(e: Event) {
    const target = e.target as HTMLElement;
    const studentIndex = +(target.getAttribute('data-student-index') as string);
    const markIndex = +(target.getAttribute('data-mark-index') as string);

    const mark = formsNumber.value[studentIndex].value[markIndex];
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

function validateInput(value: string): boolean {
    if (value === '') {
        return true;
    }
    return (!isNaN(Number(value)) && (Number(value) >= 1 && Number(value) <= regionStore.maxMark)) || value.toUpperCase() === 'H';
}

function inputFilterHandler(e: Event) {
    const target = e.target as HTMLElement;
    const studentIndex = +(target.getAttribute('data-student-index') as string);
    const markIndex = +(target.getAttribute('data-mark-index') as string);

    const prev = props.marks[studentIndex].marks[markIndex]
    if(validateInput(target.textContent as string)){
        props.marks[studentIndex].marks[markIndex] = stringToMark(target.textContent as string)
    } else {
        (target.textContent as string) = prev.toString()
    }
}

function bloorHandler(e: Event) {
    const target = e.target as HTMLElement;
    const studentIndex = +(target.getAttribute('data-student-index') as string);
    const markIndex = +(target.getAttribute('data-mark-index') as string);

    if ((target.textContent as string).trim() !== '') {
        emit('update', {
            studentID: props.marks[studentIndex].id,
            markIndex,
            value: 'H',
        });
    }
}

function onSelectMode(value: string) {
    localStorage.setItem('exhibitingMarksMode', value);
}

onMounted(() => {
    const data = localStorage.getItem('exhibitingMarksMode');
    if (!data) return;
    selectMode.value = data;
});
</script>

<template>
    <div>
        <div class="flex justify-between">
            <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight" v-if="props.subjectName">
                {{ props.subjectName }}
            </h3>
            <Select
                @update:modelValue="onSelectMode"
                default-value="popap"
                v-model="selectMode"
            >
                <SelectTrigger v-model="selectMode" class="w-[180px]">
                    <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="popap"> {{ $t('exhibitingMarksModeSwitch.popup') }}</SelectItem>
                        <SelectItem value="keyboard"> {{ $t('exhibitingMarksModeSwitch.keyboard') }}</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead class="md:text-lg   text-black">{{
                            $t('exhibitingMarksModeSwitch.students')
                        }}:
                    </TableHead>
                    <TableHead
                        class="text-xs md:text-base p-0 md:p-0"
                        v-for="date in dateArray"
                    >{{ date }}
                    </TableHead>
                </TableRow>
            </TableHeader>
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
                    <TableCell
                        v-if="selectMode === 'keyboard'"
                        v-for="(mark, markIndex) in student.marks"
                        class="p-0 md:p-0 cursor-pointer md:text-base w-[39.69px] md:w-[61px]"
                    >
                        <div
                            :data-student-index="studentIndex"
                            :data-mark-index="markIndex"
                            @input="inputFilterHandler"
                            @blur="bloorHandler"
                            contenteditable="true"
                            class="p-[0.6rem] td-into w-full h-full flex items-center justify-center"
                        >
                            {{ mark }}
                        </div>
                    </TableCell>
                    <Popover
                        v-if="selectMode === 'popap'"
                        v-for="(mark, markIndex) in student.marks"
                    >
                        <PopoverTrigger as-child>
                            <TableCell
                                class="cursor-pointer md:text-base p-[0.6rem] w-[39.69px] md:w-[61px]"
                            >
                                <div class="flex items-center justify-center">
                                    {{ mark }}
                                </div>
                            </TableCell>
                        </PopoverTrigger>
                        <PopoverContent class="w-[180px]">
                            <div>
                                <NumberField
                                    v-model="formsNumber[studentIndex].value[markIndex]"
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
                                            <NumberFieldDecrement/>
                                            <NumberFieldInput/>
                                            <NumberFieldIncrement/>
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
    </div>
</template>

<style scoped>
.td-into:focus-visible {
    outline: none;
}

td:has(.td-into:focus-visible) {
    outline: 2px solid black;
    border-radius: 3px;
}
</style>
