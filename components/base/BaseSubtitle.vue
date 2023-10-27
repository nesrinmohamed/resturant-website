<script setup>
// ===========[IMPORTS]==========
import { useSharedStore } from "~/store/sharedStore";
import { useDisplay } from "vuetify/lib/framework.mjs";
import AssetsManager from "~/core/AssetsManager";
// ===========[DEFINES]==========
const display = useDisplay();
const sharedStore = useSharedStore();
const props = defineProps([]);
const emit = defineEmits([]);

// ===========[STATE]==========
// ===========[COMPUTED]==========
// ===========[METHODS]==========

// ===========[LIFECYCLE]==========
onBeforeMount(() => {});
onMounted(() => {});
</script>

<template>
  <div class="about-subtitle text-h5 font-weight-bold font-italic">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.about-subtitle {
  border-bottom: 2px solid $primary;
  font-family: " Dancing Script";
}
</style>
