<!-- При клике на эпизод должна открываться страница с подробной информацией (название, дата выхода, список персонажей, участвующих в эпизоде). -->

<template>
  <a-flex justify="center" aligin="center" wrap="flex-wrap" class="conteiner">
    <a-card :title="itemEpisode.name" :bodyStyle="styleBodyCard">
      <template #extra>
        {{ itemEpisode.episode }}
      </template>
      <div v-for="(item, index) in character" :key="index">
        {{ item.name }}
      </div>
      <a-card-meta :title="itemEpisode.air_date" />
    </a-card>
  </a-flex>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { IEpisode, ICharacter } from '../interface/modelApi'
import api from '../util/axios'
defineOptions({ name: 'EpisodeItem' })
const route = useRoute()
const itemEpisode = ref<IEpisode>({})
const character = ref<ICharacter[]>([])

const getCharacterMultiplay = async (param: string) => {
  const responseCharacter = await api.get<ICharacter[]>(`character/[${param}]`)
  character.value = responseCharacter.data
}

const getEpisodeItem = async () => {
  const responseItemEpisode = await api.get<IEpisode>(`episode/${route.params.id}`)
  itemEpisode.value = responseItemEpisode.data
  return responseItemEpisode.data.characters
}

onMounted(async () => {
  const charactersUrl = await getEpisodeItem()
  const charactersId = String(charactersUrl.map((url) => url.match(/[^/]+$/)[0]))
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
