<template>
  <div :class="inputClass + '-container'">
    <label :class="inputClass + '-label'" v-if="topLabel">{{topLabel}}</label>
    <input
      :type="type"
      :class="inputClass + '-input-field'"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      :value='value'
    />
    <label v-if="label" :class="inputClass + '-label'">{{label}}</label>
    <error-message
      :ErrorMessage="ErrorMessage"
      :showError="showError"
      v-show="showError"
    ></error-message>
  </div>
</template>

<script>
import ErrorMessage from '@/components/ui/ErrorMessage.vue';

export default {
  components: {
    'error-message': ErrorMessage,
  },
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
    topLabel: {
      type: String,
    },
    showError: {
      type: Boolean,
    },
    value: {
      type: String,
    },
    ErrorMessage: {
      type: String,
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
label {
  display: block
}
.signup-form-label {
  margin: 0 auto;
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
.create-bill-title-input-field{
  padding: 7px 0;
  font-size: 14px;
  width: 100%;
  outline: none;
}
.create-bill-title-container {
  margin-bottom: 35px;
}
.create-bill-recipient-amount-input-field, .create-bill-recipient-email-input-field {
  padding: 7px 0;
  font-size: 14px;
  outline: none;
  width: 100%
}
/* .create-bill-recipient-amount-container, .create-bill-recipient-email-container {
  display: inline-block;
}

.create-bill-recipient-amount-container {
  width: 40%;
  margin-left: 15px;
}
.create-bill-recipient-email-container {
  width: 58%;
} */
</style>
