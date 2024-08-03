<template>
  <a-tabs v-model:activeKey="activeKey" @tabClick="(key: string) => router.push(key)" size="large">
    <a-tab-pane key="/" :tab="t('characters')" />
    <a-tab-pane key="/episodes" :tab="t('episodes')" />
    <a-tab-pane key="/locations" :tab="t('location')" />
  </a-tabs>

  <LanguageSwitcher />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useRoute, useRouter } from 'vue-router'
import useLanguage from '@/hooks/useLanguage'
const router = useRouter()
const route = useRoute()
const activeKey = ref(route.path)
const { t } = useLanguage()
</script>
