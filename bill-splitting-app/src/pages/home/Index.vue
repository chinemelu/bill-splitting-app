<template>
  <div>
    <sign-up-form></sign-up-form>
    <!-- <sign-in-form></sign-in-form> -->
  </div>
</template>

<script>
import SignupForm from '@/pages/home/SignupForm.vue';
// import SigninForm from '@/pages/home/SigninForm.vue';

export default {
  components: {
    'sign-up-form': SignupForm,
    // 'sign-in-form': SigninForm,
  },
};
</script>


<style scoped>

</style>
