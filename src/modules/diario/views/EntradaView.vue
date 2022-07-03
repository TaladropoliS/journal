<template>
  <div class="entrada-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">04</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2022, viernes</span>
    </div>

    <div class="">
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fas fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Subir foto
        <i class="fas fa-upload"></i>
      </button>
    </div>

  </div>

  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea
        placeholder="¿Qué sucedió hoy?">
    </textarea>
  </div>

  <Fab icon="fa-save"/>

  <img src="https://www.golftemuco.cl/static/core/img/nfcc/cancha-hoyo-18-002.jpg"
       alt="foto entrada"
       class="img-thumbnail"
  >

</template>

<script>
  import {defineAsyncComponent} from "vue";

  export default {
    name: "EntradaView",
    components: {
      Fab: defineAsyncComponent(() => import('../components/Fab'))
    }
  }
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>