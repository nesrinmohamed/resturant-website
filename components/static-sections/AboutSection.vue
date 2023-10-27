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
  <div class="about-section" :class="$vuetify.display.name">
    <v-container>
      <BaseTitle>About </BaseTitle>

      <v-row>
        <v-col cols="12" md="5">
          <v-sheet
            color="primary"
            class="d-flex align-center justify-center rounded-lg"
          >
            <v-img
              :src="AssetsManager.about_img"
              class="w-100"
              height="300"
            ></v-img>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="7">
          <BaseSubtitle> Delicious Burger</BaseSubtitle>

          <p class="py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            accusamus exercitationem ut. Non assumenda nihil tempore minima
            consequatur corrupti numquam quia dolorum laborum praesentium vero
            commodi ex velit expedita, omnis adipisci? Exercitationem
            consequatur ducimus praesentium dolores rerum voluptatibus, nam illo
            quas modi deleniti iusto laboriosam adipisci enim excepturi,
            cupiditate quidem neque tempora sunt animi natus aliquid. Fugiat
            eligendi molestiae magnam vero dicta est praesentium unde ducimus
            eveniet commodi alias, pariatur quis quod saepe sed accusamus porro
            nemo doloribus cumque quos quo nihil! Numquam explicabo odit
            accusamus laudantium molestiae. Ipsum culpa dolor sequi dolore
            doloribus aperiam, earum maxime alias voluptates magni.
          </p>
          <BaseBtn class="px-15">Read More</BaseBtn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped></style>
