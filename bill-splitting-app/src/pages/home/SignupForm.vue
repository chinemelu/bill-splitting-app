<template>
  <div>
    <div class="signup-form">
      <div class="signup-form-section">
        <switcher
        switcherClass="signup-form"
        leftSideLabel="Sign up"
        rightSideLabel="Sign in"
        sideSelected="left"
        @leftSwitcherClicked="$emit('sectionSelected', 'sign-up-form')"
        @rightSwitcherClicked="$emit('sectionSelected', 'sign-in-form')"
        >
        </switcher>
        <div class="form-input-group">
          <error-message
          :ErrorMessage="serverErrorMessage || networkErrorMessage"
          :showError="serverErrorMessage!=='' || networkErrorMessage !== ''"
          >

          </error-message>
          <input-field
          inputClass="signup-form"
          placeholder="Username"
          v-model="username"
          label="Username"
          :ErrorMessage="errors.username"
          :showError="errors.username !== ''"
          >
          </input-field>
          <input-field
          inputClass="signup-form"
          placeholder="Email"
          v-model="email"
          type="email"
          label="Email"
          :ErrorMessage="errors.email"
          :showError="errors.email !==''"
          >
          </input-field>
          <input-field
          inputClass="signup-form"
          placeholder="Password"
          v-model="password"
          type="password"
          label="Password"
          :ErrorMessage="errors.password"
          :showError="errors.password !== ''"
          >
          </input-field>
          <input-field
          inputClass="signup-form"
          placeholder="Confirm Password"
          v-model="confirmPassword"
          type="password"
          label="Confirm Password"
          :ErrorMessage="errors.confirmPassword"
          :showError="errors.confirmPassword !== ''"
          >
          </input-field>
          <app-button
          buttonText="Sign Up"
          @click="handleSignup"
          buttonClass="signup-form"
          :disabled="isSignupPageLoading"
          >
          </app-button>
          <spinner
          v-if="isSignupPageLoading"
          ></spinner>
        </div>
        <div class="welcome-message-container">
          <h1 class="welcome-message-body">
            <span class="welcome-message-primary">Welcome to Bill Splita</span>
            <span class="signup-message">Sign up today</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ErrorMessage from '@/components/ui/ErrorMessage.vue';
import AppButton from '@/components/ui/AppButton.vue';
import InputField from '@/components/ui/InputField.vue';
import Switcher from '@/components/ui/Switcher.vue';
import ValidateInput from '@/helper/ValidateInput';
import Spinner from '@/components/ui/Spinner.vue';

export default {
  components: {
    'app-button': AppButton,
    'input-field': InputField,
    switcher: Switcher,
    Spinner,
    'error-message': ErrorMessage,
  },
  computed: {
    ...mapState({
      isSignupPageLoading: state => state.auth.isSignupPageLoading,
      serverErrorMessage: state => state.auth.signupError,
      networkErrorMessage: state => state.auth.networkError,
      hasErrored: state => state.auth.hasErrored,
      user: state => state.auth.user,
    }),
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    ...mapActions({
      signupUser: 'handleSignup',
    }),
    validateInput() {
      const validateInput = new ValidateInput(this.errors);
      validateInput.emptyInput(this.username, 'username', 'Please enter username');
      validateInput.emptyInput(this.email, 'email', 'Please enter email');
      validateInput.emptyInput(this.password, 'password', 'Please enter password');
      validateInput.emptyInput(this.confirmPassword, 'confirmPassword', 'Please confirm your password');
      validateInput.invalidEmail(this.email);
      validateInput.confirmPassword(this.password, this.confirmPassword);
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
    handleSignup() {
      this.validateInput();
      const isThereSignupValidationError = this.isThereValidationError();
      if (!isThereSignupValidationError) {
        this.signupUser({
          username: this.username,
          email: this.email,
          password: this.password,
        });
      }
    },
  },
  watch: {
    user() {
      this.$router.push({ path: '/', query: { registration: 'success' } });
      this.$emit('sectionSelected', 'sign-in-form');
    },
  },
};
</script>


<style scoped>
.signup-form {
  border-radius: 2px;
  padding: 0;
  height: 95vh;
  max-width: 95%;
  margin: 20px auto;
  background-image: linear-gradient(to left,
                  rgba(228, 241, 254, 0.7), rgba(30, 139, 195, 0.7)),
                    url('../../assets/undraw_team_spirit_hrr4.svg');
  background-position: bottom right;
  background-size: 50%;
  background-repeat: no-repeat;
  height: 90vh;
  position: relative;
  box-shadow: 0 1.5rem 4rem rgba(204, 204, 204, 0.8)
}

.form-input-group {
  margin: 20px auto;
  width: 50%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}
.welcome-message-container {
  position: relative;
  color: #fff;
  text-align: center;
  font-weight: 800;
}
.welcome-message-body {
  position: absolute;
  top: 20px;
  right: 25%;
  transform: translateX(50%);
  width: 45%;
}
.welcome-message-primary {
  display: block;
  margin-bottom: 20px;
  font-size: 35px;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.signup-message {
  display: block;
  text-transform: uppercase;
  letter-spacing: 7px;
}
</style>
