<template>
  <div :class="[showError ? 'visible' : '', 'error-message-container']">
    <p class="error-message">{{ErrorMessage}}</p>
  </div>
</template>

<script>
export default {
  props: {
    ErrorMessage: {
      type: String,
    },
    showError: {
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.error-message-container {
  color: red;
  visibility: hidden;
}
.error-message-container.visible {
  visibility: visible;
}
.signup-form .error-message-container, .signin-form .error-message-container {
  width: 80%;
  margin: 0 auto;
}
</style>
