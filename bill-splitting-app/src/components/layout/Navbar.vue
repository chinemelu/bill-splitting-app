<template>
  <div>
    <div class="nav">
      <p class="nav-text">Bill Splita</p>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.nav {
  width: 100%;
  position: fixed;
  height: 80px;
  z-index: 1;
  top: 0;
  background-color: #fff;
  box-shadow: 0 1.5rem 4rem rgba(204, 204, 204, 0.8)
}
.nav-text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 50px;
  font-size: 25px;
}

</style>
