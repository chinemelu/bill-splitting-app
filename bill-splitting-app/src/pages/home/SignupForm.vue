<template>
  <div>
    <div class="signup-form">
      <div class="signup-form-section">
        <switcher
        switcherClass="signup-form"
        leftSideLabel="Sign up"
        rightSideLabel="Sign in"
        >
        </switcher>
        <form action="POST" class="form-input-group">
          <input-field
          inputClass="signup-form"
          placeholder="Username"
          :required="true"
          label="Username"
          >
          </input-field>
          <input-field
          inputClass="signup-form"
          placeholder="Email"
          type="email"
          :required=" true"
          label="Email"
          >
          </input-field>
          <input-field
          inputClass="signup-form"
          placeholder="Password"
          type="password"
          :required="true"
          label="Password"
          >
          </input-field>
          <app-button
          buttonText="Sign Up"
          @click="handleSignup"
          buttonClass="signup-form"
          >

          </app-button>
        </form>
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
import AppButton from '@/components/ui/AppButton.vue';
import InputField from '@/components/ui/InputField.vue';
import Switcher from '@/components/ui/Switcher.vue';

export default {
  components: {
    'app-button': AppButton,
    'input-field': InputField,
    switcher: Switcher,
  },
  methods: {
    handleSignup() {
      console.log('signed up');
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
