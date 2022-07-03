<template>
  <div class="entradas-list-container">

    <div class="px-2 pt-2">
      <input type="text"
             class="form-control"
             placeholder="Buscar Entradas">
    </div>

    <div class="entradas-scrollarea">
      <h2 v-for="item in 100" :key="item">
        <Entrada/>
      </h2>
    </div>

  </div>
</template>

<script>
  import {defineAsyncComponent} from "vue";

  export default {
    name: "EntradasList",
    components: {
      Entrada: defineAsyncComponent(() => import('./Entrada'))
    }

  }
</script>

<style lang="scss" scoped>

.entradas-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entradas-scrollarea {
  height: calc(100vh - 105px);
  overflow: scroll;
}
</style>