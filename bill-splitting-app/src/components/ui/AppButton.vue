<template>
  <div class="app-button">
    <button
      @click="$emit('click')"
      :class="buttonClass+'-btn'"
      :disabled="disabled"
    >
      {{buttonText}}
    </button>
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
    disabled: {
      type: Boolean,
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
  background-color: rgba(30, 139, 195, 1);
  border: none;
  cursor: pointer;
  outline: none;
  color: #fff;
}
.create-bill-invite-btn {
  border: 1px solid rgba(30, 139, 195, 1);
  padding: 15px 40px;
  text-transform: uppercase;
  border-radius: 25px;
  background-color: rgba(30, 139, 195, 1);
  color: #fff;
  cursor: pointer;
  outline: none;
  display: block;
  margin: 10px auto;
  font-size: 14px;
}
button {
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  border: 1px solid #ccc;
  pointer-events: none;
}

</style>
