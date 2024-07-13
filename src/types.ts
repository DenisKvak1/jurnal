export type Lesson = {
    id: number;
    lessonId: number;
    callStart: string;
    callEnd: string;
    name: string;
    cabinet: string;
    teacher: string;
    current: string;
    homeWork: string;
    mark: number;
};
export type Mark = number | 'H' | '';

export type Student = {
    id: number;
    firstName: string;
    lastName: string;
};
export type DiaryDayElement = {
    id: number;
    date: string;
    subjects: Lesson[];
};
export type WeekDate = {
    startWeekTIMESTAMP: string;
};

export enum UserRole {
    ADMIN = 'ADMIN',
    DIRECTOR = 'DIRECTOR',
    HEAD_TEACHER = 'HEAD_TEACHER',
    TEACHER = 'TEACHER',
    STUDENT = 'STUDENT',
}
export type User = {
    role: UserRole;
    firstName: string;
    lastName: string;
    surname: string;
    birthday: string;
    school: string;
    class: string;
    photo: string;
    gender: 0 | 1;
};

export type Region = 'uk' | 'ru' | 'kz';
export const regionList = ['uk', 'ru', 'kz'];

export type ServerResponse = any;
