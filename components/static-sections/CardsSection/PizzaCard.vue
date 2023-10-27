<script setup>
// ===========[IMPORTS]==========
import { useSharedStore } from "~/store/sharedStore";
import { useDisplay } from "vuetify/lib/framework.mjs";
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
  <v-sheet
    class="pizza-card"
    color="transparent"
    :class="$vuetify.display.name"
  >
    <v-container>
      <v-row>
        <v-col
          v-for="(item, index) in sharedStore.pizzaCards"
          :key="index + 'b-k'"
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
          <BaseCardsBaseCard :item="item"></BaseCardsBaseCard>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
