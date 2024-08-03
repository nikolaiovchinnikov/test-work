import type { MessageLanguages } from '@/util/i18n'
import { useI18n } from 'vue-i18n'
import type { WritableComputedRef } from 'vue'

export default function useLanguage() {
  const { locale, t } = useI18n({ useScope: 'global' })
  const lang = locale as WritableComputedRef<MessageLanguages>
  return {
    lang,
    t
  }
}
