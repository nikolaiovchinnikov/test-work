<template>
  <a-card hoverable @click="() => router.push(`person/${props.item.id}`)">
    <template #cover>
      <img alt="example" :src="props.item.image"/>
    </template>
    <a-card-meta :title="props.item.name" />
  </a-card>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ICharacter from '../interface/modelApi'
defineOptions({ name: 'PreViveCard' })
const router = useRouter()

const props = defineProps<{ item: ICharacter }>()

</script>