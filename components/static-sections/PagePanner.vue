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
  <div class="page-panner">
    <LayoutsHeadersPageHeader
      :title="'other product'"
      :description="'Lorem ipsum dolor sit amet ipsum dolor sit amet.'"
    ></LayoutsHeadersPageHeader>

    <!-- ============ PIZZA  SECTION =========== -->
    <v-container>
      <v-row class="my-5">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(pizza, i) in sharedStore.pizza"
          :key="i + 'p-k'"
        >
          <v-sheet color="primary" class="rounded-lg">
            <v-img :src="pizza" height="200px"></v-img>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped></style>
