<script setup>
/*##########[ IMPORTS ]##########*/
import AssetsManager from "~/core/AssetsManager";
// import HelperFunctions from "~/core/HelperFunctions";
import { useDisplay } from "vuetify/lib/framework.mjs";

import { useSharedStore } from "~/store/sharedStore";
/*##########[ DEFINES ]##########*/
const props = defineProps(["item"]);
const emit = defineEmits([""]);
const display = useDisplay();
const sharedStore = useSharedStore();
// const infinityScroll = HelperFunctions.infinityScroll(() => {

//     if (!!!currencies.value) return;
//     if (!!loading.value) return;
//     if (!!currencies.value.meta.current_page >= currencies.value.meta.last_page) return;
//     currencies.value.meta.current_page++;
//     fetchCurrencies(currencies.value.meta.current_page);

// })

/*##########[ COMPUTED ]##########*/

/*##########[ STATE ]##########*/

/*##########[ METHODS ]##########*/

/*##########[ LIFE CYCLE ]##########*/
onMounted(() => {});
onBeforeUnmount(() => {});
</script>

<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        class="card-item"
        v-bind="props"
        :color="isHovering ? 'primary-1' : undefined"
        elevation="1"
      >
        <v-container>
          <v-img :src="item.img" height="200px"></v-img>
          <v-card-title
            class="text-secondary text-h5 font-weight-bold text-capitalize"
          >
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle class="py-2">{{ item.description }}</v-card-subtitle>

          <div class="d-flex align-center justify-space-between px-5">
            <span class="text-secondary font-weight-medium text-subtitle-2"
              >${{ item.price }}</span
            >
            <v-icon>mdi mdi-basket-outline</v-icon>
          </div>
        </v-container>
      </v-card>
    </template>
  </v-hover>
</template>

<style lang="scss" scoped>
.card-item {
  cursor: pointer;
  transition: 300ms all ease-in-out;
}
</style>
