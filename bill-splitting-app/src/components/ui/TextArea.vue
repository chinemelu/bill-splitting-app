<template>
  <div :class="inputClass + '-container'">
    <label :class="inputClass + '-label'" v-if="topLabel">{{topLabel}}</label>
    <textarea
      :type="type"
      :class="inputClass + '-text-area-field'"
      :placeholder="placeholder"
      :required="required"
      @input="$emit('input', $event.target.value)"
      :value='value'
      rows="7"
    >
    </textarea>
    <label v-if="label" :class="inputClass + '-label'">{{label}}</label>
    <error-message
    :ErrorMessage="ErrorMessage"
    :showError="showError"
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
    required: {
      type: Boolean,
    },
    topLabel: {
      type: String,
    },
    ErrorMessage: {
      type: String,
    },
    showError: {
      type: Boolean,
    },
    value: {
      type: String,
    },
  },
};
</script>


<style scoped>
.create-bill-description-label {
  display: block;
}

.create-bill-description-text-area-field {
  font-size: 14px;
  outline: none;
  width: 100%;
}
.create-bill-description-container {
  margin-bottom: 35px;
}
.create-bill-recipient-amount-input-field, .create-bill-recipient-email-input-field {
  padding: 7px 0;
  font-size: 14px;
  outline: none;
  width: 100%
}
.create-bill-recipient-amount-container, .create-bill-recipient-email-container {
  display: inline-block;
}

.create-bill-recipient-amount-container {
  width: 40%;
  margin-left: 15px;
}
.create-bill-recipient-email-container {
  width: 58%;
}
</style>
