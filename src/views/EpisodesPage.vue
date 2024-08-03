<template>
  <a-flex justify="center" class="conteiner" aligin="center">
    <a-table
      class="conteiner"
      :columns="columns"
      :data-source="dataEpisode.results"
      :customRow="rowCastomEvent"
      :pagination="false"
    >
    </a-table>
  </a-flex>
  <PaginationBlock v-if="dataEpisode.info" :total="dataEpisode.info.count" :change="getEpisodes" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../util/axios'
import { useRouter } from 'vue-router'
import type { IEpisode, IResultsEpisode } from '@/interface/modelApi'
import PaginationBlock from '@/components/PaginationBlock.vue'
defineOptions({ name: 'EpisodesPage' })

const dataEpisode = ref<IResultsEpisode>({} as IResultsEpisode)
const router = useRouter()

const columns = [
  {
    title: 'Эпизоды',
    dataIndex: 'episode',
    width: '33%'
  },
  {
    title: 'Назавние',
    dataIndex: 'name',
    width: '33%'
  },
  {
    title: 'Дата выхода',
    dataIndex: 'air_date',
    width: '33%'
  }
]

const rowCastomEvent = (record: IEpisode) => {
  return {
    onClick: () => router.push(`episodes/${record.id}`)
  }
}

const getEpisodes = async (page?: number) => {
  const pathDefault = page ? `episode/?page=${page}` : 'episode'
  const responseEpisodes = await api.get<IResultsEpisode>(pathDefault)
  dataEpisode.value = responseEpisodes.data
}

onMounted(() => {
  getEpisodes()
})
</script>

<style lang="css">
.conteiner {
  width: 100%;
}
</style>
