<template>
  <!-- <auth-base><verify-email email="amirali@gmail.com" /></auth-base> -->
  <!-- <auth-base><login-form /></auth-base> -->
  <!-- <the-header></the-header> -->
  <!-- <auth-base><create-account-form /></auth-base> -->
  <!-- <object-card></object-card> -->
  <!-- <object-menu fileName="Asal.pdf" accessType="viewer"></object-menu> -->
  <people-container></people-container>
</template>

<script>
// import BackButton from "./components/common/buttons/BackButton.vue";
// import PeopleItem from "./components/modules/people/PeopleItem.vue";
import PeopleContainer from "./components/modules/people/PeopleContainer.vue";
// import ObjectMenu from "./components/modules/objects/ObjectMenu.vue";
// import ObjectCard from "./components/modules/objects/ObjectCard.vue";
// import AuthBase from "./components/modules/auth/AuthBase.vue";
// import CreateAccountForm from "./components/modules/auth/CreateAccountForm.vue";
// import LoginForm from "./components/modules/auth/LoginForm.vue";
// import TheHeader from "./components/modules/objects/TheHeader.vue";
// import VerifyEmail from "./components/modules/auth/VerifyEmail.vue";

export default {
  name: "App",
  components: {
    // PeopleItem,
    // BackButton,
    PeopleContainer,
    // ObjectMenu,
    // AuthBase,
    // CreateAccountForm,
    // VerifyEmail,
    // LoginForm,
    //TheHeader,
    // ObjectCard,
  },
};
</script>

<style>
CreateAccountForm #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
