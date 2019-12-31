<template>
  <div>
   <div :class="switcherClass + '-switcher'">
      <ul>
        <li><a class="anchor-first-toggle" href="#">{{leftSideLabel}}</a></li>
        <li><a class="anchor-second-toggele" href="#">{{rightSideLabel}}</a></li>
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
  position: relative
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
