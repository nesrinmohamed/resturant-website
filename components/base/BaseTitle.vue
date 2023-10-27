<script setup>
// ===========[IMPORTS]==========
import { useDisplay } from "vuetify/lib/framework.mjs";
// ===========[DEFINES]==========
const display = useDisplay();
const props = defineProps(["title"]);
const emit = defineEmits([]);

// ===========[STATE]==========
// ===========[COMPUTED]==========
// ===========[METHODS]==========

// ===========[LIFECYCLE]==========
onBeforeMount(() => {});
onMounted(() => {});
</script>

<template>
  <v-sheet
    color="transparent"
    class="title-section text-center text-h3 font-weight-bold mx-auto py-5 my-10 font-italic text-capitalize"
    width="100%"
  >
    <slot />
  </v-sheet>
</template>

<style lang="scss" scoped>
.title-section {
  border-bottom: 2px solid $primary;
  font-family: " Dancing Script";
}
</style>
