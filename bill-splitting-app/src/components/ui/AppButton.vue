<template>
  <div>
    <div class="app-button">
      <button
        @click="$emit('click')"
        :class="buttonClass+'-btn'"
      >
        {{buttonText}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
    },
    buttonClass: {
      type: String,
    },
  },
};
</script>


<style scoped>
.signup-form-btn {
  display: block;
  width: 300px;
  padding: 1rem 1.5rem;
  border-radius: 23px;
  margin: 0 auto;
  font-size: 14px;
  background-color: rgba(30, 139, 195, 0.7);
  border: none;
  cursor: pointer;
  outline: none;
  color: #fff;
}

</style>
