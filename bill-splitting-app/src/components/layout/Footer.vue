<template>
  <div>
    <div class="footer">
      <p class="footer-text"><span>&#169; 2019</span> Bill Splita</p>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.footer {
  width: 100%;
  position: fixed;
  height: 70px;
  z-index: 1;
  bottom: 0;
  background-color: black;
  color: #fff;
}
.footer-text {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 50%;
  font-size: 18px;
  text-align: center;
}

</style>
