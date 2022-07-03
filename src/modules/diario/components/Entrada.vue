<template>
  <div
      class="entrada-container mb-3 pointer p-2"
      @click="$router.push({name: 'entrada', params:{id:7}})"
  >

    <div class="entrada-title d-flex">
      <span class="text-success fs-5 fw-bold">02</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2022</span>
    </div>

    <div class="entrada-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium eius expedita
      iusto mollitia nihil quae! Architecto. Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Aliquam aspernatur aut autem cum dolor ea earum eos fuga id iste minus provident,
      quaerat quidem quisquam, repellendus repudiandae temporibus ut vero!

    </div>

  </div>
</template>

<script>
  export default {
    name: "EntradA"
  }
</script>

<style lang="scss" scoped>
.entrada-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 25);
    transition: 0.2s all ease-in;
  }

  .entrada-description {
    font-size: 13px;
  }
}

</style>