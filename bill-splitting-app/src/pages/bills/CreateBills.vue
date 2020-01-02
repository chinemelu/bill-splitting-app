 <template>
 <default-layout>
    <div class="create-bills-section">
      <div class="create-bills-heading">
        <p>Create Bill Split</p>
      </div>
      <div class="form-input-group">
        <input-field
        inputClass="create-bill-title"
        topLabel="Title"
        v-model="title"
        :ErrorMessage="errors.title"
        :showError="errors.title !== ''"
        >
        </input-field>
        <text-area
        inputClass="create-bill-description"
        v-model="description"
        topLabel="Description"
        :ErrorMessage="errors.description"
        :showError="errors.description !== ''"
        >
        </text-area>

        <div class="recipient-details-heading-container">
          <p class="recipient-details-heading">Recipient's Details</p>
        </div>
        <div class="recipients-inputs-container" v-for="(input, index) in inputs" :key="index">
          <input-field
          inputClass="create-bill-recipient-email"
          topLabel="Email"
          v-model="input.email"
          :ErrorMessage="input.errors.email"
          :showError="input.errors.email !== ''"
          >
          </input-field>

          <input-field
          inputClass="create-bill-recipient-amount"
          type="number"
          topLabel="Amount"
          v-model="input.amount"
          :ErrorMessage="input.errors.amount"
          :showError="input.errors.amount !== ''"
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
        @click="handleBillCreation"
        buttonClass="create-bill-invite"
        :disabled="isCreateBillsPageLoading"
        >
        </app-button>
        <spinner
        v-if="isCreateBillsPageLoading"
        >
        </spinner>
      </div>
    </div>
 </default-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AppButton from '@/components/ui/AppButton.vue';
import TextArea from '@/components/ui/TextArea.vue';
import InputField from '@/components/ui/InputField.vue';
import defaultLayout from '@/components/layout/defaultLayout.vue';
import ValidateInput from '@/helper/ValidateInput';
import ValidateMultipleInputs from '@/helper/ValidateMultipleInputs';
import Spinner from '@/components/ui/Spinner.vue';

export default {
  components: {
    'app-button': AppButton,
    'input-field': InputField,
    'text-area': TextArea,
    'default-layout': defaultLayout,
    Spinner,
  },
  data() {
    return {
      inputs: [{
        email: '',
        amount: '',
        errors: {
          email: '',
          amount: '',
        },
      }],
      title: '',
      description: '',
      errors: {
        description: '',
        title: '',
      },
    };
  },
  computed: {
    ...mapState({
      isCreateBillsPageLoading: state => state.bills.isCreateBillsPageLoading,
      bills: state => state.bills.bills,
    }),
  },
  watch: {
    bills() {
      this.$router.push({ path: '/list' });
    },
  },
  methods: {
    ...mapActions({
      createBill: 'handleBillCreation',
    }),
    addMoreRecipients() {
      this.inputs.push({
        email: '',
        amount: '',
        errors: {
          email: '',
          amount: '',
        },
      });
    },
    validateInput() {
      const validateInput = new ValidateInput(this.errors);
      validateInput.emptyInput(this.description, 'description', 'Please enter description');
      validateInput.emptyInput(this.title, 'title', 'Please enter title');
      this.inputs.forEach((input) => {
        const validateMultipleInputs = new ValidateMultipleInputs(input);
        validateMultipleInputs
          .validateMultipleEmptyInputs(input.email, 'email', 'Please enter email');
        validateMultipleInputs.validateMultipleEmails(input.email);
        validateMultipleInputs
          .validateMultipleEmptyInputs(input.amount, 'amount', 'Please enter amount');
        validateMultipleInputs
          .validateMultipleAmounts(input.amount);
      });
    },
    isThereValidationError() {
      let result;
      Object.keys(this.errors).forEach((key) => {
        if (this.errors[key] !== '') {
          result = true;
        }
      });
      return result;
    },
    handleBillCreation() {
      this.validateInput();
      const user = JSON.parse(localStorage.getItem('user'));
      const userAccountID = user.user_account_id;
      const isThereSigninValidationError = this.isThereValidationError();
      if (!isThereSigninValidationError) {
        this.createBill({
          user_account_id: userAccountID,
          title: this.title,
          description: this.description,
          recipients: this.inputs.map(input => ({
            email: input.email,
            amount: input.amount,
          })),
        });
      }
    },
  },
};
</script>


<style scoped>
.create-bills-section {
  max-width: 900px;
  margin: 110px auto;
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
