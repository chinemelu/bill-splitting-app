<template>
  <div>
    <sign-up-form
      @sectionSelected="handleSectionSelected"
      @successfulRegistration="handleSuccessfulRegistration"
      v-if="sectionSelected==='sign-up-form'"
    >

    </sign-up-form>
    <sign-in-form
     @sectionSelected="handleSectionSelected"
     v-if="sectionSelected==='sign-in-form'"
    >

    </sign-in-form>
  </div>
</template>

<script>
import SignupForm from '@/pages/home/SignupForm.vue';
import SigninForm from '@/pages/home/SigninForm.vue';

export default {
  components: {
    'sign-up-form': SignupForm,
    'sign-in-form': SigninForm,
  },
  data() {
    return {
      sectionSelected: 'sign-up-form',
    };
  },
  methods: {
    handleSectionSelected(value) {
      this.sectionSelected = value;
    },
    handleSuccessfulRegistration() {
      console.log('handlingggg');
      this.sectionSelected = 'sign-in-form';
    },
  },
};
</script>


<style scoped>
.signup-form-switcher ul li a, .signin-form-switcher ul li a  {
  text-decoration: none;
  color: #ccc;
}
.signup-form-switcher > ul,.signin-form-switcher > ul {
  list-style: none;
  width: 50%;
  padding: 0;
  margin-top: 0px;
  position: absolute;
  top: 20px;
}

.signin-form-switcher > ul {
  right: 0;
  list-style: none;
  width: 50%;
  padding: 0;
  margin-top: 0px;
  position: absolute;
  top: 20px;
}

.signup-form-switcher ul li, .signin-form-switcher ul li {
  display: inline-block;
  width: 50%;
  text-align: center;
  position: relative;
  border: 2px solid
}

.signup-form-switcher ul li a::after, .signin-form-switcher ul li a::after  {
  content: '';
  display: block;
  height: 4px;
  width: 100%;
  position: absolute;
  top: 30px;
}

.signup-form-switcher .anchor-first-toggle::after,
.signin-form-switcher .anchor-first-toggle::after {
  background-color: rgba(30, 139, 195, 0.9);
}

.signup-form-switcher .anchor-second-toggle::after,
.signin-form-switcher .anchor-second-toggle::after {
  background-color: #d2d8d8;
}


.signup-form-switcher {
  color: black;
}

.signup-form-switcher ul li a.selected::after {
  background-color: black;
}

.signup-form-switcher ul li a.un-selected::after {
  background-color: #d2d8d8;
}
</style>
