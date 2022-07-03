<template>

  <NavBar/>

  <div class="d-flex">

    <div class="col-4">
      <EntradasList/>
    </div>

    <div class="col">
      <router-view/>
    </div>

  </div>

</template>

<script>
  import {defineAsyncComponent} from "vue";

  export default {
    name: "DayBookLayout",
    components: {
      EntradasList: defineAsyncComponent(() => import('../components/EntradasList')),
      NavBar: defineAsyncComponent(() => import('../components/NavBar'))
    }
  }
</script>

<style scoped>

</style>