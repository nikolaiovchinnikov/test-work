<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ICharacter from '../interface/modelApi'
defineOptions({ name: 'InformationCharacter' })
const route = useRoute()
console.log(route.params.id)
</script>
