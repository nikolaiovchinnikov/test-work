<template>
  <a-flex justify="center" aligin="center" wrap="flex-wrap" class="conteiner">
    <a-card :title="itemCharacter.name" :bodyStyle="styleBodyCard">
      <template #extra> <a-image width="40px" :src="itemCharacter.image" /></template>
      <a-card size="small" title="Пол">
        <template #extra>
          {{ itemCharacter.gender }}
        </template>
      </a-card>
      <a-card size="small" title="Вид">
        <template #extra>
          {{ itemCharacter.species }}
        </template>
      </a-card>
      <a-card size="small" title="Статус">
        <template #extra>
          {{ itemCharacter.status }}
        </template>
      </a-card>
      <a-card size="small" title="Тип">
        <template #extra>
          {{ itemCharacter.type }}
        </template>
      </a-card>
      <a-card-meta :title="itemCharacter.created" description="This is the description" />
    </a-card>
    <img class="display_none" :src="itemCharacter.image" />
  </a-flex>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import type { ICharacter } from '../interface/modelApi'
import api from '../util/axios'
defineOptions({ name: 'InformationCharacter' })
const route = useRoute()

const getCharacterItem = async () => {
  const responseItemCharacter = await api.get<ICharacter>(`character/${route.params.id}`)
  itemCharacter.value = responseItemCharacter.data
}

const itemCharacter = ref<ICharacter>({} as ICharacter)

onMounted(() => {
  getCharacterItem()
})

const styleBodyCard = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  height: '90%',
  paddingTop: '0',
  paddingBottom: '0'
}
</script>

<style scoped lang="css">
@media screen and (max-width: 600px) {
  .display_none {
    display: none;
  }
}
.conteiner {
  height: 370px;
  min-height: 370px;
}
</style>
