<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, useField, useForm } from 'vee-validate';
import i18n from '@/locales';

const t = i18n.global.t;

type form = {
  email: string;
  password: string;
};

const emit = defineEmits<{
  (event: 'login', values: form): void;
}>();

const validations = {
  email: (value: string) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!value) return t('validateError.required');
    if (!regex.test(value))
      return t('authenticationForm.validateError.emailCorrect');

    return true;
  },
  password: (value: string) => {
    const min = 8;
    const max = 30;

    if (!value) return t('validateError.required');
    if (value.trim() !== value) return t('validateError.trim');
    if (value.length < min) return t('validateError.min', { min });
    if (value.length > max) return t('validateError.max', { max });

    return true;
  },
};
const { handleSubmit, resetForm } = useForm({
  validationSchema: validations,
});
const { value: email, errorMessage: emailError } = useField('email') as any;
const { value: password, errorMessage: passwordError } = useField(
  'password'
) as any;

const onSubmit = handleSubmit((values) => {
  resetForm(values);
  emit('login', values as form);
});
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl">
        {{ $t('authenticationForm.login') }}
      </CardTitle>
      <CardDescription>
        {{ $t('authenticationForm.describe') }}
      </CardDescription>
    </CardHeader>
    <form @submit.prevent="onSubmit">
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">{{ $t('authenticationForm.email') }}</Label>
          <Input
            v-model="email"
            id="email"
            type="email"
            placeholder="m@example.com"
            autocomplete="email"
            required
          />
          <span>{{ emailError }}</span>
        </div>
        <div class="grid gap-2">
          <Label for="password">{{ $t('authenticationForm.password') }}</Label>
          <Input
            v-model="password"
            id="password"
            type="password"
            autocomplete="password"
            required
          />
          <span>{{ passwordError }}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit">
          {{ $t('authenticationForm.signIn') }}
        </Button>
      </CardFooter>
    </form>
  </Card>
</template>

<style scoped></style>
