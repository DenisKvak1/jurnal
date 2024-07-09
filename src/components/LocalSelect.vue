<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ref, watch } from 'vue';
import { Region } from '@/types.ts';
import { useRegionStore } from '@/store/RegionStore.ts';
import { cn } from '@/lib/utils.ts';

const regionStore = useRegionStore();
const local = ref('');
watch(local, () => regionStore.setLanguage(local.value as Region));

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <Select v-model="local">
    <SelectTrigger :class="cn(props.class, 'w-[180px]')">
      <SelectValue :placeholder="$t('localSwitch.switch')" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="ru"> Русский </SelectItem>
        <SelectItem value="uk"> Українська </SelectItem>
        <SelectItem value="kz"> Қазақ тілі </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<style scoped></style>