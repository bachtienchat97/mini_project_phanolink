<template>
  <div class="user">
    <Header />
    <UserInfor />
    <Footer />
  </div>
</template>

<script>
import Header from "../layouts/Header.vue";
import Footer from "../layouts/Footer.vue";
import UserInfor from "../components/UserInfor.vue";

export default {
  name: "User",
  components: { Header, Footer, UserInfor },
};
</script>

<style></style>
