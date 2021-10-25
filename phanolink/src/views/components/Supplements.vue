<template>
  <div class="supplements container">
     <div class="supplements-header">
         <div class="supplements-left">
             <img src="../../assets/img/thucpham-green2x.png" alt="pres">
             <span>Thực Phẩm Chức Năng</span>
         </div>
        <a href="#">Xem tất cả ></a>
     </div>
  </div>
</template>

<script>
export default {
 name: 'Supplements'
}
</script>

<style scoped lang="scss">
.supplements {
    margin-bottom: 20px;
    
    a {
            text-decoration: none;
    }

    .supplements-header {
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        .supplements-left {
            img{
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin-right: 10px;
            width: 20px;
        }

        span {
           font-size: 15px;
        }
        }
    }
}
</style>