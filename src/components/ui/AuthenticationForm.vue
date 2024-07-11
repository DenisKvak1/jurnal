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
import {
    configure,
    defineRule,
    ErrorMessage,
    Form,
    useField,
    useForm,
} from 'vee-validate';
import { email, min, required, max} from '@vee-validate/rules';
import i18n from '@/locales';

const t = i18n.global.t
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);


configure({
    generateMessage: ({ field, rule }) => {
        if (!rule) {
            return `${field} не прошло валидацию`;
        }

        const messages: Record<string, string> = {
            required: t('validateError.required'),
            email: t('authenticationForm.validateError.emailCorrect'),
            min: t('validateError.min', {min: 8}),
            max: t('validateError.max', {max: 30})
        };

        return messages[rule.name as keyof typeof messages] || `Поле ${field} не прошло валидацию`;
    },
});

const { handleSubmit } = useForm();

const { value: emailForm } = useField('email', 'required|email');
const { value: passwordForm } = useField('password', 'required|min:8|max:30');

function onSubmit() {}
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
    <form @submit="handleSubmit(onSubmit)">
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">{{ $t('authenticationForm.email') }}</Label>
          <Input
            v-model="emailForm as string"
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
          <ErrorMessage name="email"></ErrorMessage>
        </div>
        <div class="grid gap-2">
          <Label for="password">{{ $t('authenticationForm.password') }}</Label>
          <Input
            v-model="passwordForm as string"
            id="password"
            type="password"
            required
          />
          <ErrorMessage name="password"></ErrorMessage>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" class="w-full"> {{ $t('authenticationForm.signIn') }}</Button>
      </CardFooter>
    </form>
  </Card>
</template>

<style scoped></style>
