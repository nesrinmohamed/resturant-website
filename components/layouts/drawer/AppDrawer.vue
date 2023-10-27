<script setup>
// ===========[IMPORTS]==========

import { useDisplay } from "vuetify/lib/framework.mjs";
import { useSharedStore } from "~/store/sharedStore";

// ===========[DEFINES]==========
const display = useDisplay();
const sharedStore = useSharedStore();
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

// ===========[STATE]==========
// ===========[COMPUTED]==========
const navDrawer = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
// ===========[METHODS]==========

// ===========[LIFECYCLE]==========
onBeforeMount(() => {});
onMounted(() => {});
</script>

<template>
  <v-navigation-drawer
    v-if="$vuetify.display.mobile"
    v-model="navDrawer"
    location="start"
    permanent
    class="nav-drawer mt-15"
    width="300"
    height="100vh"
    order="0"
  >
    <v-sheet
      color="transparent"
      width="100%"
      height="100%"
      class="pb-5 text-center"
    >
      <div
        v-for="(item, index) in sharedStore.navLinks"
        :key="index + 'i-k'"
        :class="{ active: $route.path === item.path }"
        class="py-6 text-capitalize text-black font-weight-black text-subtitle"
      >
        <NuxtLink to="">{{ item.name }}</NuxtLink>
        <!-- <NuxtLink :to="item.path" class="router-link">{{
            item.title
          }}</NuxtLink> -->
      </div>

      <div class="icons">
        <v-icon class="me-5"> mdi mdi-account-outline</v-icon>
        <v-icon>mdi mdi-cart</v-icon>
      </div>
    </v-sheet>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped></style>
