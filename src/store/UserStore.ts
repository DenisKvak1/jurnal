import { defineStore } from 'pinia';
import { User, UserRole } from '@/types.ts';
import { config } from '@/config.ts';

type state = User & {};
export const useUserStore = defineStore('authentication', {
    state: (): state => ({
        role: UserRole.STUDENT,
        firstName: '',
        lastName: '',
        surname: '',
        birthday: '',
        school: '',
        class: '',
        photo: `${config.IP}/static/images/no_avatar/boy.jpg`,
        gender: 1,
    }),
});
