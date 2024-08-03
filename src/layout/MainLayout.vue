<template>
  <a-layout class="layout min-vh-100">
    <a-layout-header style="background-color: #FFFED3;">
      <MainHeader />
    </a-layout-header>

    <a-layout-content class="py-3">
      <router-view />
    </a-layout-content>

    <a-layout-footer></a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import MainHeader from '../components/MainHeader.vue'
</script>
