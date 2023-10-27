<script setup>
// ===========[IMPORTS]==========
import { useSharedStore } from "~/store/sharedStore";
import { useDisplay } from "vuetify/lib/framework.mjs";
import AssetsManager from "~/core/AssetsManager";
// ===========[DEFINES]==========
const display = useDisplay();
const sharedStore = useSharedStore();
const props = defineProps(["title", "description"]);
const emit = defineEmits([]);

// ===========[STATE]==========
// ===========[COMPUTED]==========
// ===========[METHODS]==========

// ===========[LIFECYCLE]==========
onBeforeMount(() => {});
onMounted(() => {});
</script>

<template>
  <v-sheet class="page-header" color="transparent">
    <v-card>
      <v-img
        :src="AssetsManager.banner_img"
        class="align-center text-center text-primary"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
        height="300px"
        cover
      >
        <v-card-title class="text-h4 text-capitalize font-weight-bold">
          {{ title }}
        </v-card-title>
        <v-card-subtitle class="text-subtitle-1 py-5">{{ description }}</v-card-subtitle>
        <BaseBtn class="px-10">order now</BaseBtn>
      </v-img>
    </v-card>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
