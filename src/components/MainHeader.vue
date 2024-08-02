<template>
  <a-tabs v-model:activeKey="activeKey" @tabClick="(key: string) => router.push(key)" size="large">
    <a-tab-pane key="/" tab="Персонажи" />
    <a-tab-pane key="/episodes" tab="Эпизоды" />
    <a-tab-pane key="/locations" tab="Локации" />
  </a-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
defineOptions({ name: 'MainHeader' })

const route = useRoute()
const router = useRouter()
const activeKey = ref(route.path)
</script>
