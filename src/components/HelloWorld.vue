<template>
  <v-row>
    <v-row>
      <v-col cols="12">
        <img width="300" height="300" src="../assets/img/pikachuwhite.png" />
      </v-col>
    </v-row>
    <h3>Welcome to Pokedex</h3>
  </v-row>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.font-title {
}
</style>
