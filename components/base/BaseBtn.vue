<script setup></script>

<template>
  <v-btn
    class="base-btn text-primary py-2 text-capitalize font-italic"
    color="transparent"
  >
    <slot />
  </v-btn>
</template>

<style lang="scss" scoped>
.base-btn {
  border: 1px solid $primary;
  text-shadow: 1px 1px 1px black;
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: $primary !important;
    color: #fff !important;
  }
}
</style>
