<script setup lang="ts">
import { User } from '@/types.ts';
import { config } from '@/config.ts';
import { formatDateDMMMM } from '../helpers/formatTime.ts';
import { useRegionStore } from '@/store/RegionStore.ts';

const regionStore = useRegionStore();
const props = defineProps({
  profile: {
    required: true,
    type: Object as () => User,
  },
});
</script>

<template>
  <div class="flex gap-4 justify-center w-full items-between flex-col">
    <div class="flex items-center gap-4 h-20">
      <img
        class="h-full w-20 rounded-3xl"
        :src="props.profile?.photo || config.startAvatarURL"
      />
      <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
        {{
          `${props.profile.firstName} ${props.profile.lastName} ${props.profile.surname}`
        }}
      </h4>
    </div>
    <div class="grid my-grid w-full md:grid-rows-2 md:grid-cols-2 md:gap-x-20">
      <div class="border-b w-full flex justify-between first-of-type:border-t">
        <span class="font-medium leading-10">{{ $t('profile.role') }}:</span>
        <span class="font-medium leading-10">{{
          $t(`roles.${props.profile.role}`)
        }}</span>
      </div>
      <div
        class="border-b w-full flex justify-between first-of-type:border-t md:border-t"
      >
        <span class="font-medium leading-10"
          >{{ $t('profile.birthday') }}:
        </span>
        <span class="font-medium leading-10">{{
          formatDateDMMMM(props.profile.birthday, regionStore.language)
        }}</span>
      </div>
      <div
        v-if="props.profile?.class"
        class="border-b w-full items-center flex justify-between first-of-type:border-t"
      >
        <span class="font-medium leading-10">{{ $t('profile.class') }}: </span>
        <span
          class="font-medium rounded-2xl bg-[#67ae5a] px-2 py-1 text-white dark:text-black"
          >{{ profile.class }}</span
        >
      </div>
      <div
        v-if="props.profile?.school"
        class="border-b w-full flex justify-between first-of-type:border-t"
      >
        <span class="font-medium leading-10">{{ $t('profile.school') }}: </span>
        <span class="font-medium leading-10">{{ profile.school }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
