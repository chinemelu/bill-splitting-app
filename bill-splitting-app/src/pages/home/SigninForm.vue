<template>
  <div>
    <div class="signin-form">
      <div class="signin-form-section">
        <switcher
        switcherClass="signin-form"
        leftSideLabel="Sign up"
        rightSideLabel="Sign in"
        sideSelected="right"
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
          <FlashMessage position='right top'></FlashMessage>
          <input-field
          inputClass="signup-form"
          placeholder="Email"
          v-model="email"
          :ErrorMessage="errors.email"
          :showError="errors.email !== ''"
          type="email"
          :required=" true"
          label="Email"
          >
          </input-field>
          <input-field
          inputClass="signup-form"
          placeholder="Password"
          v-model="password"
          type="password"
          :required="true"
          label="Password"
          :ErrorMessage="errors.password"
          :showError="errors.password !== ''"
          >
          </input-field>
          <app-button
          buttonText="Login"
          @click="handleSignin"
          buttonClass="signup-form"
          :disabled="isSigninPageLoading"
          >

          </app-button>
          <spinner
            v-if="isSigninPageLoading"
          ></spinner>
        </div>
        <div class="welcome-message-container">
          <h1 class="welcome-message-body">
            <span class="welcome-message-primary">Welcome Back!!!</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AppButton from '@/components/ui/AppButton.vue';
import ErrorMessage from '@/components/ui/ErrorMessage.vue';
import InputField from '@/components/ui/InputField.vue';
import Switcher from '@/components/ui/Switcher.vue';
import Spinner from '@/components/ui/Spinner.vue';
import ValidateInput from '@/helper/ValidateInput';

export default {
  components: {
    'app-button': AppButton,
    'input-field': InputField,
    switcher: Switcher,
    Spinner,
    'error-message': ErrorMessage,
  },
  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapState({
      isSigninPageLoading: state => state.auth.isSigninPageLoading,
      serverErrorMessage: state => state.auth.signinError,
      networkErrorMessage: state => state.auth.networkSigninError,
      hasSigninErrored: state => state.auth.hasSigninErrored,
      authUser: state => state.auth.authUser,
    }),
  },
  mounted() {
    if (this.$route.query.registration === 'success') {
      this.flashMessage.success({
        title: 'Successful registration',
        message: 'You can now proceed to login',
      });
    }
  },
  methods: {
    ...mapActions({
      signinUser: 'handleSignin',
    }),
    validateInput() {
      const validateInput = new ValidateInput(this.errors);
      validateInput.emptyInput(this.email, 'email', 'Please enter email');
      validateInput.emptyInput(this.password, 'password', 'Please enter password');
      validateInput.invalidEmail(this.email);
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
    handleSignin() {
      this.validateInput();
      const isThereSigninValidationError = this.isThereValidationError();
      if (!isThereSigninValidationError) {
        this.signinUser({
          email: this.email,
          password: this.password,
        });
      }
    },
  },
  watch: {
    authUser() {
      localStorage.setItem('user', JSON.stringify(this.authUser));
      this.$router.push({ path: '/create' });
    },
  },
};
</script>


<style scoped>
.signin-form {
  border-radius: 2px;
  padding: 0;
  height: 95vh;
  max-width: 95%;
  margin: 20px auto;
  background-image: linear-gradient(to left,
                  rgba(228, 241, 254, 0.7), rgba(30, 139, 195, 0.7)),
                    url('../../assets/undraw_sign_in_e6hj.svg');
  background-position: bottom left;
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
  right: 0;
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
  left: 25%;
  transform: translateX(-50%);
  width: 45%;
}
.welcome-message-primary {
  display: block;
  margin-bottom: 20px;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.signup-message {
  display: block;
  text-transform: uppercase;
  letter-spacing: 7px;
}
</style>
