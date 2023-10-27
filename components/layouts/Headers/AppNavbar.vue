<script setup>
// ==========[IMPORTS]==========
import { useSharedStore } from "~/store/sharedStore";
import { ref, mergeProps } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
// ============ [DEFINES] =========
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const sharedStore = useSharedStore();
const display = useDisplay();

const items = ref([
  { title: "Pizza" },
  { title: "Fries" },
  { title: "Fried Checken" },
]);

const methods = ref({
  mergeProps,
});

const navDrawer = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <v-sheet
    class="app-navbar d-flex align-center justify-space-between"
    color="transparent"
    :class="$vuetify.display.name"
  >
    <div class="logo d-flex align-center">
      <h2 class="text-uppercase text-h5 font-weight-bold text-shadow">
        Bur <span class="text-primary me-5">ger</span>
      </h2>
      <nav
        v-if="!$vuetify.display.mobile"
        class="d-flex align-center justify-space-between"
      >
        <v-list bg-color="transparent" class="d-flex justify-space-between">
          <v-list-item
            v-for="(link, i) in sharedStore.navLinks"
            :key="i"
            class="list-item text-capitalize font-weight-bold text-black text-subtitle-1"
          >
            <NuxtLink
              :to="link.path"
              v-if="link.name !== 'others'"
              class="router-link"
              :class="{ active: $route.path === link.path }"
              >{{ link.name }}</NuxtLink
            >
            <v-menu v-if="link.name === 'others'">
              <template v-slot:activator="{ props: menu }">
                <NuxtLink
                  v-bind="mergeProps(menu)"
                  class="router-link others-menu p-0"
                >
                  {{ link.name }}
                  <v-icon>mdi mdi-chevron-down</v-icon>
                </NuxtLink>
              </template>

              <v-list bg-color="primary">
                <v-list-item
                  v-for="(item, index) in sharedStore.items"
                  :key="index"
                >
                  <NuxtLink to="/" class="text-black">{{
                    item.title
                  }}</NuxtLink>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list>

        <div class="icons">
          <v-icon>mdi mdi-account-outline</v-icon>
          <v-icon>mdi mdi-cart</v-icon>
        </div>
      </nav>
    </div>

    <v-btn
      @click="navDrawer = !navDrawer"
      v-if="$vuetify.display.mobile"
      temporary
      color="black"
      rounded="0"
      variant="outlined"
      size="40px"
    >
      <v-icon v-if="navDrawer" size="30"> mdi-close </v-icon>
      <v-icon v-else size="30"> mdi-menu </v-icon>
    </v-btn>
  </v-sheet>
</template>

<style lang="scss" scoped>
.app-navbar {
  .logo {
    h2 {
      text-shadow: 1px 1px 1px black;
    }
  }
  .others-menu {
    cursor: pointer;
  }
  .nav-menu {
    padding: 10px;
    cursor: pointer;
    &::focus {
      border: 2px solid black;
    }
  }
  .icons {
    position: absolute;
    right: 10px;
    padding: 0 10px;
    font-size: 1rem;
    cursor: pointer;
    i {
      margin: 0 5px;
    }
  }
}
</style>
