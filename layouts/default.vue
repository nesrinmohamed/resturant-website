<script setup>
import { ref } from "vue";
const navDrawer = ref(false);
</script>

<template>
  <v-app class="app ">
    <div class="home-section home-bg">
      <v-container>
        <LayoutsHeadersAppNavbar v-model="navDrawer"></LayoutsHeadersAppNavbar>
      <LayoutsHeadersAppHeader></LayoutsHeadersAppHeader>
      </v-container>
    </div>
    <LayoutsDrawerAppDrawer v-model="navDrawer"></LayoutsDrawerAppDrawer>
    <v-layout>
      <v-main>
        <Suspense>
          <!-- component with nested async dependencies -->
          <slot />

          <!-- loading state via #fallback slot -->
          <template #fallback> Loading... </template>
        </Suspense>
      </v-main>
    </v-layout>
    <LayoutsFootersAppFooter></LayoutsFootersAppFooter>
  </v-app>
</template>

<style lang="scss" scoped></style>
