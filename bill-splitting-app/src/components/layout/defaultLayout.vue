<template>
  <div>
   <side-bar>
    <slot></slot>
   </side-bar>
   <nav-bar></nav-bar>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue';
import Sidebar from '@/components/layout/Sidebar.vue';

export default {
  components: {
    'nav-bar': Navbar,
    'side-bar': Sidebar,
  },
};
</script>

<style scoped>
</style>
