<template>
  <div>
    <div class="sidenav">
      <router-link to="#"><font-awesome-icon icon="plus-circle"/>Create</router-link>
      <router-link to="#"><font-awesome-icon icon="list"/>List</router-link>
    </div>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(30, 139, 195, 1);
  color: #fff;
  overflow-x: hidden;
  padding-top: 90px;
}
.sidenav a {
  padding: 15px 8px 15px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  display: block;
  margin-bottom: 10px;
}
.fa-list, .fa-plus-circle {
  margin-right: 10px;
}
.sidenav a:hover {
  background-color: #ccc;
}

.sidenav a:active {
  background-color: #ccc;
}

.main {
  margin-left: 160px;
  padding: 0px 10px;
}
</style>
