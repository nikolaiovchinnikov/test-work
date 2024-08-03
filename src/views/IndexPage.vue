<template>
  <a-flex justify="center" aligin="center" class="conteiner" wrap="wrap" gap="large">
    <PreViveCard v-for="(item, index) in dataCharacter.results" :key="index" :item="item" />
  </a-flex>
  <PaginationBlock  v-if="dataCharacter.info" :total="dataCharacter.info.count" :change="getCharacter"/>
</template>

<script setup lang="ts">
import PreViveCard from '../components/PreViveCard.vue'
import { ref, onMounted } from 'vue'
import api from '../util/axios'
import type { IResultsCharacter } from '@/interface/modelApi'
import PaginationBlock from '@/components/PaginationBlock.vue'
const dataCharacter = ref<IResultsCharacter>({} as IResultsCharacter)


const getCharacter = async (page?: number ) => {
  const pathDefault = page ? `character/?page=${page}` : 'character'
  const responseCharacter = await api.get<IResultsCharacter>(pathDefault)
  dataCharacter.value = responseCharacter.data
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
