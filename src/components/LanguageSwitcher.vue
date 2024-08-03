<template>
  <a-select
    v-model:value="lang"
    style="width: 120px"
    :options="langOptions"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useLanguage from '@/hooks/useLanguage'
import type { SelectProps } from 'ant-design-vue'
defineOptions({ name: 'LanguageSwitcher' })
const { lang } = useLanguage()
const handleChange = (value: 'ru' | 'kz' | 'en') => {
  lang.value = value
}
const langOptions = ref<SelectProps['options']>([
  {
    value: 'ru',
    label: 'Русский'
  },
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'kz',
    label: 'Қазақша'
  }
])
</script>
