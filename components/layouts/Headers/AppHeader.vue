<script setup>
import AssetsManager from "~/core/AssetsManager";
</script>
<template>
  <div class="app-header py-15" :class="$vuetify.display.name">
    <v-row class="d-flex align-center">
      <v-col cols="8" md="6">
        <div>
          <h2
            class="section-title text-h2 text-capitalize py-10 font-weight-bold line-height line-2"
          >
            Super Delicious
            <br />
            <span class="text-primary">Burger</span>
          </h2>
        </div>

        <span
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          iste!</span
        >
        <v-sheet class="d-flex align-center font-weight-bold py-10 header-btns" color="transparent">
          <v-btn
            class="order-btn bg-black pointer text-primary-white px-6 py-1 me-5 rounded-lg text-capitalize text-subtitle-1"
          >
            order now
          </v-btn>
          <span class="price">$100</span>
        </v-sheet>
      </v-col> 
      <v-col cols="6" v-if="$vuetify.display.mdAndUp">
        <v-sheet
          color="transparent"
          class="humbrger-img"
          width="400"
          height="400"
        >
          <v-img
            :src="AssetsManager.Bureger_Header_img"
            class="w-100 h-100"
          ></v-img>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  .section-title {
    text-shadow: 1px 1px 1px black;
  }
  .header-btns {
    .order-btn {
      letter-spacing: 4px !important;
      cursor: pointer !important;
      transition: 300ms ease-in-out;
      &:hover {
        background-color: #ffc800 !important;
      }
    }
  }
  .humbrger-img {
    animation: moveUpDown 5s infinite linear !important;
  }

  &.sm {
    height: 90vh;
  }
}
</style>
