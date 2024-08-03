
import { createI18n } from 'vue-i18n'
import messages from '@/I18n/locales'



export type MessageLanguages = keyof typeof messages
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof messages['ru']

declare module 'vue-i18n' {
    export interface DefineLocaleMessage extends MessageSchema { }

    // define the datetime format schema
    export interface DefineDateTimeFormat { }

    // define the number format schema
    export interface DefineNumberFormat { }
}
const i18n = createI18n({
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    legacy: false,
    messages
})

export default i18n

