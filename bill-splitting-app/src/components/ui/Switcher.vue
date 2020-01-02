<template>
  <div>
   <div :class="switcherClass + '-switcher'">
      <ul>
        <li
        @click="handleSelected({
          emit: 'leftSwitcherClicked', selected: 'left'
        })"
        ><router-link
        :class="[selected === 'left' ? 'selected' : 'un-selected', 'anchor-first-toggle']"
         to="#">{{leftSideLabel}}</router-link></li>
        <li
        @click="handleSelected({
          emit: 'rightSwitcherClicked', selected: 'right'
        })"
        ><router-link
        :class="[selected === 'right' ? 'selected' : 'un-selected', 'anchor-second-toggle']"
        to="#">{{rightSideLabel}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftSideLabel: {
      type: String,
    },
    rightSideLabel: {
      type: String,
    },
    switcherClass: {
      type: String,
    },
    sideSelected: {
      type: String,
    },
  },
  data() {
    return {
      selected: this.sideSelected,
    };
  },
  methods: {
    handleSelected(value) {
      this.$emit(value.emit);
      this.selected = value.selected;
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
}

.signup-form-switcher ul li a::after, .signin-form-switcher ul li a::after  {
  content: '';
  display: block;
  height: 4px;
  width: 100%;
  position: absolute;
  top: 30px;
}

.anchor-first-toggle, .anchor-second-toggle {
  padding: 20px;
  width: 100%
}

.signup-form-switcher ul li a::after,
.signin-form-switcher ul li a::after {
  background-color: rgba(30, 139, 195, 1);
}

.signup-form-switcher ul li a::after,
.signin-form-switcher ul li a::after {
  background-color: #d2d8d8;
}

.signup-form-switcher ul li a.selected::after {
  background-color: rgba(30, 139, 195, 1);
}

.signup-form-switcher ul li a.un-selected::after {
  background-color: #d2d8d8;
}
.signin-form-switcher ul li a.selected::after {
  background-color: rgba(30, 139, 195, 1);
}

.signin-form-switcher ul li a.un-selected::after {
  background-color: #d2d8d8;
}

</style>
