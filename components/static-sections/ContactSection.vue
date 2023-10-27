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
  <div class="contact-section" :class="$vuetify.display.name">
    <v-container>
      <BaseTitle> Contact </BaseTitle>

      <v-card elevation="0" class="contact-card px-5">
        <v-row>
          <v-col cols="12" md="6">
            <BaseSubtitle> contact </BaseSubtitle>
            <p class="mb-5 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dolorem sit excepturi, nemo reiciendis animi?
            </p>
            <v-text-field
              label="Name"
              variant="outlined"
              bg-color="primary"
              max-width="100"
              class="text-secondary font-weight-bold text-h6"
            ></v-text-field>
            <v-text-field
              label="Email"
              variant="outlined"
              bg-color="primary"
              max-width="100"
              class="text-secondary font-weight-bold text-h6"
            ></v-text-field>
            <v-text-field
              label="Phone"
              variant="outlined"
              bg-color="primary"
              max-width="100"
              class="text-secondary font-weight-bold text-h6"
            ></v-text-field>
            <BaseBtn class="px-15">Send</BaseBtn>
          </v-col>

          <v-col cols="12" md="6">
            <BaseSubtitle> info </BaseSubtitle>
            <p class="mb-5 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              dolorem sit excepturi, nemo reiciendis animi?
            </p>
            <v-sheet class="text-primary font-italic" width="100%">
              <v-row class="text-primary">
                <v-col cols="12">
                  <v-icon>mdi mdi-phone</v-icon>
                  <span>0000000000</span>
                </v-col>
                <v-col cols="12">
                  <v-icon>mdi mdi-email</v-icon>
                  <span>example@gmail.com</span>
                </v-col>
                <v-col cols="12">
                  <v-icon>mdi mdi-map-marker</v-icon>
                  <span>Egypt Cairo</span>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.contact-card {
  border: 1px solid $primary;
  span {
    margin: 0 5px;
  }
  // input {
  //   margin-left: 5px;
  //   font-size: 1.4rem;
  //   padding: 6px 0;
  //   &::placeholder {
  //     color: $primary !important;
  //     opacity: 1;
  //   }
  // }
}
</style>
