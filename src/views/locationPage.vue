<template>
  <a-flex justify="center" class="conteiner" aligin="center">
    <a-table
      class="conteiner"
      :columns="columns"
      :data-source="datalocation.results"
      :customRow="rowCastomEvent"
      :pagination="false"
    >
    </a-table>
  </a-flex>
  <PaginationBlock
    v-if="datalocation.info"
    :total="datalocation.info.count"
    :change="getlocation"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '../util/axios'
import { useRouter } from 'vue-router'
import type { IResultslocation, Ilocation } from '@/interface/modelApi'
import PaginationBlock from '@/components/PaginationBlock.vue'
defineOptions({ name: 'locationPage' })
const datalocation = ref<IResultslocation>({} as IResultslocation)
const router = useRouter()

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

const getlocation = async (page?: number) => {
  const pathDefault = page ? `location/?page=${page}` : 'location'
  const responselocation = await api.get<IResultslocation>(pathDefault)
  datalocation.value = responselocation.data
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
