<template>
  <div>
    <div :class="inputClass + '-container'">
      <input
        :type="type"
        :class="inputClass + '-input-field'"
        :placeholder="placeholder"
        :required="required"
      />
      <label :class="inputClass + '-label'">{{label}}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    inputClass: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    required: {
      type: Boolean,
    },
  },
};
</script>


<style scoped>
.signup-form-container{
  margin-bottom: 40px;
}
.signup-form-input-field {
  margin: 1.5rem 2rem;
  font-size: 16px;
  font-weight: 100;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  outline: none;
  display: block;
  width: 80%;
  padding: 0;
}
::-webkit-input-placeholder {
  color: #ccc;
}
.signup-form-input-field:placeholder-shown.signup-form-input-field:valid,
.signup-form-input-field:placeholder-shown.signup-form-input-field:invalid {
  border-bottom: 1px solid#ccc;
}
.signup-form-label {
  margin: 0 auto;
  display: block;
  width: 80%;
  font-size: 14px;
  transition: all .1s;
  color: rgba(30, 139, 195, 0.9)
}
.signup-form-input-field:placeholder-shown
+ .signup-form-label {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-45px)
}

.signup-form-input-field.signup-form-input-field:valid {
  border-bottom: 3px solid green;
}
.signup-form-input-field.signup-form-input-field:invalid{
  border-bottom: 3px solid red;
}

</style>
