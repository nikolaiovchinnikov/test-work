<template>
  <a-flex justify="center" class="conteiner" aligin="center">
    <a-table
      class="conteiner"
      :columns="columns"
      :data-source="location"
      :customRow="rowCastomEvent"
      :pagination="false"
    >
    </a-table>
  </a-flex>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../util/axios'
import { useRouter } from 'vue-router'
import type { Ilocation } from '@/interface/modelApi'
defineOptions({ name: 'locationPage' })

const router = useRouter()
const location = ref<Ilocation[]>([])

const columns = [
  {
    title: 'Имя',
    dataIndex: 'name',
    width: '33%'
  },
  {
    title: 'Тип',
    dataIndex: 'type',
    width: '33%'
  },
  {
    title: 'Измерение',
    dataIndex: 'dimension',
    width: '33%'
  }
]

const rowCastomEvent = (record: Ilocation) => {
  return {
    onClick: () => router.push(`locations/${record.id}`)
  }
}

const getlocation = async () => {
  const responselocation = await api.get<{ results: Ilocation[] }>('location')
  location.value = responselocation.data.results
}

onMounted(() => {
  getlocation()
})
</script>

<style lang="css">
.conteiner {
  width: 100%;
}
</style>
