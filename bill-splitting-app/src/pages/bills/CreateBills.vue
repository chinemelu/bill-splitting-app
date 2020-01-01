 <template>
 <default-layout>
    <div class="create-bills-section">
      <div class="create-bills-heading">
        <p>Create Bill Split</p>
      </div>
      <form action="POST" class="form-input-group">
        <input-field
        inputClass="create-bill-title"
        :required=" true"
        topLabel="Title"
        >
        </input-field>
        <text-area
        inputClass="create-bill-description"
        :required="true"
        topLabel="Description"
        >
        </text-area>

        <div class="recipient-details-heading-container">
          <p class="recipient-details-heading">Recipient's Details</p>
        </div>
        <div class="recipients-inputs-container" v-for="(input, index) in inputs" :key="index">
          <input-field
          inputClass="create-bill-recipient-email"
          :required="true"
          topLabel="Email"
          >
          </input-field>

          <input-field
          inputClass="create-bill-recipient-amount"
          type="number"
          :required="true"
          topLabel="Amount"
          >
          </input-field>
        </div>
        <div class="add-more-recipients-section">
          <span class="add-more-recipients-text">
            Add more recipients
          </span>
          <font-awesome-icon icon="plus-circle" @click="addMoreRecipients"/>
        </div>

        <app-button
        buttonText="Invite"
        @click="handleSignin"
        buttonClass="create-bill-invite"
        >
        </app-button>
      </form>
    </div>
 </default-layout>
</template>

<script>
import AppButton from '@/components/ui/AppButton.vue';
import TextArea from '@/components/ui/TextArea.vue';
import InputField from '@/components/ui/InputField.vue';
import defaultLayout from '@/components/layout/defaultLayout.vue';

export default {
  components: {
    'app-button': AppButton,
    'input-field': InputField,
    'text-area': TextArea,
    'default-layout': defaultLayout,
  },
  data() {
    return {
      inputs: [{
        one: '',
        two: '',
      }],
    };
  },
  methods: {
    addMoreRecipients() {
      this.inputs.push({
        one: '',
        two: '',
      });
    },
  },
};
</script>


<style scoped>
.create-bills-section {
  max-width: 900px;
  margin: 150px auto;
  padding: 20px;
  font-weight: 100;
}
.create-bills-heading {
  text-align: center;
  margin-bottom: 35px;
  font-size: 30px;
  border-bottom: 1px solid #ccc;
}
.recipient-details-heading {
  margin-top: 16px;
  font-size: 25px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.recipient-details-heading-container {
  margin-bottom: 35px;
}
.create-bill-recipient-amount-input-field, .create-bill-recipient-email-input-field {
  padding: 7px 0;
  font-size: 14px;
  outline: none;
  width: 100%
}
.create-bill-recipient-amount-container, .create-bill-recipient-email-container,
.create-bill-invite-btn {
  display: inline-block;
}

.create-bill-recipient-amount-container {
  width: 40%;
  margin-left: 15px;
}
.create-bill-recipient-email-container {
  width: 58%;
}
.add-more-recipients-section {
  font-size: 20px;
  margin-top: 35px;
}
.add-more-recipients-text, .fa-plus-circle {
  vertical-align: middle
}
.fa-plus-circle {
  cursor: pointer;
  font-size: 25px;
}
.recipients-inputs-container {
  margin-bottom: 20px;
}
</style>
