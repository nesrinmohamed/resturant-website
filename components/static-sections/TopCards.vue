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
    class="cards d-flex align-center justify-space-between"
    color="transparent"
    :class="$vuetify.display.name"
  >
    <v-container>
      <v-row dense>
        <v-col
          v-for="(card, i) in sharedStore.cards.card_item_1"
          :key="i + 'c-k'"
          cols="12"
          sm="6"
        >
          <v-card elevation="0" class="text-primary text-subtitle-1">
            <v-img
              :src="card.img_bg"
              class="align-start"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
              height="200px"
              cover
            >
              <v-card-title>{{ card.title }}</v-card-title>
              <v-card-subtitle class="py-2">{{
                card.description
              }}</v-card-subtitle>
              <BaseBtn class="ms-5">order now</BaseBtn>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col
          v-for="(card, i) in sharedStore.cards.card_item_2"
          :key="i + 'c-k'"
          cols="12"
          sm="4"
        >
          <v-card elevation="0" class="text-primary text-subtitle-1">
            <v-img
              :src="card.img_bg"
              class="align-start"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
              height="200px"
              cover
            >
              <v-card-title>{{ card.title }}</v-card-title>
              <v-card-subtitle class="py-2">{{
                card.description
              }}</v-card-subtitle>
              <BaseBtn class="ms-5 px-6">order now</BaseBtn>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped></style>
