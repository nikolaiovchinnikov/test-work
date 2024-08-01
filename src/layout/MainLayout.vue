<template>
  <a-layout class="layout">
    <a-layout-header>
      <MainHeader />
    </a-layout-header>

    <a-layout-content class="py-3">
      <router-view />
    </a-layout-content>

  </a-layout>
</template>

<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue'

</script>