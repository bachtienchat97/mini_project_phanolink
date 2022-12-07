<template>
  <div>
    <div class="wrap-user" v-if="isAuthen || userLocal">
      <div class="user show-tooltip" v-if="user.name">
        {{ user.name }}
        <div class="tooltipText">
          <span> Thông tin tài khoản</span>
          <span>Đơn mua</span>
          <span class="logout" @click="handleLogout">Đăng xuất</span>
        </div>
      </div>

      <div class="user show-tooltip" v-if="userLocal">
        {{ userLocal.name }}
        <div class="tooltipText">
          <span> Thông tin tài khoản</span>
          <span>Đơn mua</span>
          <span class="logout" @click="handleLogout">Đăng xuất</span>
        </div>
      </div>
    </div>

    <div class="wrap-user" v-else>
      <router-link to="/login">
        <span class="login">Đăng nhập</span>
      </router-link>
      <span class="user-unlogged">Tài khoản</span>
    </div>
  </div>
</template>

<script>
import { removeStorage } from "@/utils/localStorage";
import { getStorageParse } from "@/utils/localStorage";

import { mapGetters } from "vuex";

export default {
  name: "User",

  data() {
    return {
      userLocal: {},
    };
  },

  computed: {
    ...mapGetters({
      user: "auth/allUser", //Array
      isAuthen: "auth/isAuthen",
    }),
  },
  methods: {
    async handleLogout() {
      await this.$store.dispatch("auth/logoutUser", {}, { root: true });
      this.userLocal = removeStorage();
    },
  },

  created() {
    this.userLocal = getStorageParse();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles";

.wrap-user {
  display: flex;
  flex-direction: column;
}

.show-tooltip {
  position: relative;

  .tooltipText::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: -7px;
  }

  .tooltipText {
    visibility: hidden;
    background-color: $color-btn;
    padding: 10px 10px 0 10px;
    margin-bottom: -6px;
    display: flex;
    flex-direction: column;
    width: 150px;
    color: $color-primary;
    -khtml-transform: translateY(-4px);
    transform: translateY(-4px);
    border: 1px solid $color-primary;
    border-radius: 5px;
    transition: all 0.3s;
    /* Position the tooltip */
    position: absolute;
    top: 26px;
    left: -35px;
    z-index: 1;

    span {
      margin-bottom: 6px;
    }
  }

  &:hover .tooltipText {
    visibility: visible;
  }
}
.user {
  font-size: 15px;
}

.logout {
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}

.user,
.user-unlogged {
  cursor: pointer;
}
.popover-body {
  display: flex;
  flex-direction: column;
  padding: 15px !important;
  font-size: 16px;

  span {
    margin-bottom: 5px;
    cursor: pointer;
  }
}

.login {
  cursor: pointer;
  font-size: 13px;
  border-radius: 5px;
  font-weight: 500;
  &:hover {
    color: $color-primary;
  }
}
</style>