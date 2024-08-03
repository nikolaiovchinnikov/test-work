<template>
  <a-pagination
    class="d-flex justify-content-center mt-4"
    @change="() => change(current)"
    v-model:current="current"
    :total="total"
    :defaultPageSize="20"
    show-less-items
    :showSizeChanger="false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ total: number; change: (current: number ) => void }>()

const current = ref(1)
</script>
