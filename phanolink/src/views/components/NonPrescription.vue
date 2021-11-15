<template>
  <div class="non-prescription container">
    <div class="prescription-header">
      <div class="prescription-left">
        <img src="../../assets/img/pills.png" alt="pills" />
        <span>Thuốc Không Kê Toa</span>
      </div>
      <a href="#">Xem tất cả ></a>
    </div>
  </div>
</template>

<script>

export default {
  name: "NonPrescription",
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/styles.scss";

.non-prescription {
  margin-bottom: 20px;
  background-color: $color-bg-white;

  a {
    text-decoration: none;
  }

  .prescription-header {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .prescription-left {
      img {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 30px;
        margin-right: 10px;
      }

      span {
        font-size: 15px;
      }
    }
  }
}
</style>
