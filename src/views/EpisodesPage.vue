<template>
  <a-flex justify="center" class="conteiner" aligin="center" >
    <a-table class="conteiner" :columns="columns" :data-source="episodes" 
        :customRow="rowCastomEvent" :pagination="false">
    </a-table>
  </a-flex>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../util/axios'
import { useRouter } from 'vue-router'
defineOptions({ name: 'EpisodesPage' })
const router = useRouter()


const episodes = ref([])


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


const rowCastomEvent = (record) => {
    return {
      onClick: event => router.push(`episodes/${record.id}`),
    }
}


const getEpisodes = async () => {
  const responseEpisodes = await api.get('episode')
  episodes.value = responseEpisodes.data.results
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
