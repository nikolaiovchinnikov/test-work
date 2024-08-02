<template>
    <a-flex justify="center" aligin="center" wrap="flex-wrap" class="conteiner">
      <a-card :title="itemlocation.name" :bodyStyle="styleBodyCard">
        <template #extra>
          {{ itemlocation.dimension }}
          {{ itemlocation.type }}
        </template>
        <div v-for="(item, index) in character" :key="index">
          {{ item.name }}
        </div>
      </a-card>
    </a-flex>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { onMounted, ref } from 'vue'
  import type { ICharacter, Ilocation } from '../interface/modelApi'
  import api from '../util/axios'
  defineOptions({ name: 'locationItem' })
  const route = useRoute()
  const itemlocation = ref<Ilocation>({} as Ilocation)
  const character = ref<ICharacter[]>([])
  
  const getCharacterMultiplay = async (param: string) => {
    const responseCharacter = await api.get<ICharacter[]>(`character/[${param}]`)
    character.value = responseCharacter.data
  }
  
  const getlocationItem = async () => {
    const responseItemlocation= await api.get<Ilocation>(`location/${route.params.id}`)
    itemlocation.value = responseItemlocation.data
    return responseItemlocation.data.residents
  }
  
  onMounted(async () => {
    const charactersUrl = await getlocationItem()
    const charactersId = String(charactersUrl.map((url) => String(url.match(/[^/]+$/))))
    getCharacterMultiplay(charactersId)
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
  
  <style lang="css">
  .conteiner {
    height: 370px;
    min-height: 370px;
  }
  </style>
  