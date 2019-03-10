<template>
    <div>
      
		
	
		<div>高级设置 <div @click="flag=!flag" class="div">^</div></div>

		<div v-show="flag">

		<div>姓名：<input type="text"></div>

		<div>姓名：<input type="text"></div>

		<div>姓名：<input type="text"></div>

		<div>姓名：<input type="text"></div>

	
 		</div>	
    </div>
</template>
 <style>
	.div {
		width: 20px;
		height: 20px;
		background: red;

	}



  </style>

<script>
export default {
      data() {
          return {
        flag: false
      }
      },
      methods: {
        /* toggle() {
          this.flag = !this.flag
        } */
      }
}
</script>

