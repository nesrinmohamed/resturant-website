<script setup>
import AssetsManager from "~/core/AssetsManager";
import RoutesManager from "~/core/RoutesManager";

import { useSharedStore } from "~/store/sharedStore";

const sharedStore = useSharedStore();
</script>
<template>
  <v-sheet color="primary" class="app-footer text-white">
    <div class="footer-top">
      <v-container>
        <v-row>
          <v-col cols="12" lg="3" md="6" sm="6">
            <div class="d-flex align-center">
              <NuxtLink :to="RoutesManager.home">
                <v-img
                  :src="AssetsManager.Burger_Logo"
                  width="100"
                  height="100"
                ></v-img>
              </NuxtLink>
              <span class="text-decoration-none text-white text-h3 mx-5"
                >Burger</span
              >
            </div>
            <div>
              <p class="py-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, libero.
              </p>
              <p>Karachi</p>
              <p class="py-5">Sindh</p>
              <p>Pakistan</p>
            </div>
            <div class="text-subtitle-2">
              <div class="email py-3">
                <v-icon>mdi mdi-email</v-icon>
                <span class="ms-3">example@gmail.com</span>
              </div>

              <div class="phone">
                <v-icon>mdi mdi-map-marker</v-icon>
                <span class="ms-3">Egypt Cairo</span>
              </div>
            </div>
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="6">
            <v-row>
              <v-col
                cols="12"
                md="6"
                v-for="(footerLink, i) in sharedStore.footerLinks"
                :key="i + 'f-k'"
              >
                <h4 class="text-capitalize text-h6">{{ footerLink.name }}</h4>
                <p class="w-75">{{ footerLink.desc }}</p>
                <div
                  v-for="(link, i) in footerLink.links"
                  :key="i + 'l - k'"
                  class="py-3"
                >
                  <NuxtLink
                    :to="link.path"
                    class="text-decoration-none text-white text-subtitle-2 text-capitalize"
                    >{{ link.name }}</NuxtLink
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" lg="3" md="6" sm="6">
            <h2>{{ sharedStore.socialLinks.name }}</h2>
            <p class="py-5">{{ sharedStore.socialLinks.desc }}</p>
            <v-row>
              <v-col
                v-for="(socialLink, index) in sharedStore.socialLinks.links"
                :key="index"
              >
                <v-icon @click="$router.push(socialLink.href)">{{
                  socialLink.icon
                }}</v-icon>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="footer-bottom">
      <v-container
        class="d-flex align-center justify-space-between text-white text-subtitle-2"
      >
        <span>@CopyRight Burger All RightS reserved</span>
        <span>Designed By ...</span>
      </v-container>
    </div>
  </v-sheet>
</template>

<style lang="scss" scoped>
.footer-top {
  widows: 100%;
  background: linear-gradient(110deg, $secondary 60%, $primary 40%);
}
</style>
