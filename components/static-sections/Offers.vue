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
  <div class="offers">
    <v-container>
      <BaseTitle > offers</BaseTitle>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="(offer, i) in sharedStore.offers"
          :key="i"
        >
          <v-img
            :src="offer.img"
            width="150"
            height="150"
            class="mx-auto"
          ></v-img>
          <p
            class="text-subtitle-1 text-secondary font-weight-medium text-center"
          >
            {{ offer.title }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped></style>
