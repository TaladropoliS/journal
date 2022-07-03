<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Hola Mundo TaladropoliS</h1>
    <button @click="goToDiario" class="btn btn-primary">Diario</button>
    <button @click="goToDiario" class="btn btn-secondary">secondary</button>
    <button @click="goToDiario" class="btn btn-success">success</button>
  </div>
</template>
<script>
  export default {
    methods: {
      goToDiario() {
        this.$router.push({name: 'no-entrada'})
      }
    }
  }
</script>
