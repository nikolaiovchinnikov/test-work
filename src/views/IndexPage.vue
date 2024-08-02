<template>
  <a-flex justify="center" aligin="center" class="conteiner" wrap="wrap" gap="large">
    <PreViveCard v-for="(item, index) in character" :key="index" :item="item" />
  </a-flex>
</template>

<script setup lang="ts">
import PreViveCard from '../components/PreViveCard.vue'
import { ref, onMounted } from 'vue'
import api from '../util/axios'
import type { ICharacter } from '@/interface/modelApi'
const character = ref<ICharacter[]>([])

const getCharacter = async () => {
  const responseCharacter = await api.get<{ results: ICharacter[] }>('character')
  character.value = responseCharacter.data.results
}

onMounted(() => {
  getCharacter()
})
</script>
<style lang="css">
.conteiner {
  width: 100%;
}
</style>
