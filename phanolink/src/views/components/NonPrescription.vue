<template>
  <div class="non-prescription container">
     <div class="prescription-header">
         <img src="../../assets/img/prescription.png" alt="pres">
         <span>Thuốc Không Kê Toa</span>
     </div>
     <a href="#">Xem tất cả ></a>
  </div>
</template>

<script>
import '../../assets/scss/styles.scss'

export default {
name: 'NonPrescription'
}
</script>

<style scoped lang="scss">
.non-prescription {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    
    a {
            text-decoration: none;
    }

    .prescription-header {
        padding: 15px;
        
        img{
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        span {
           font-size: 15px;
        }

        
    }
}
</style>