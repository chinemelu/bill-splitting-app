<template>
  <div>
   <side-bar>
    <slot></slot>
   </side-bar>
   <nav-bar></nav-bar>
   <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
  components: {
    'nav-bar': Navbar,
    'side-bar': Sidebar,
    Footer,
  },
};
</script>

<style scoped>
</style>
