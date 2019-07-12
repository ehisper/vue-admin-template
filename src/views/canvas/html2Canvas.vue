<template>
  <div ref="imageWrapper" class="imageWrapper">
    <div :class="{'dn': show, 'content': true}">
      <!-- <button @click="toImage">点击</button> -->
      <p>vue 使用html2canvas将DOM转化为图片</p>
      <p>vue 使用html2canvas将DOM转化为图片</p>
      <p>vue 使用html2canvas将DOM转化为图片</p>
      <p>vue 使用html2canvas将DOM转化为图片</p>
      <img src="@/assets/1.png" alt="">
      <a :href="dataURL">点这里下载</a>
    </div>
    <div :class="{'mask': true, 'dn': !show}">
      <img :src="dataURL" class="img" alt="">
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  data() {
    return {
      dataURL: '',
      show: false,
      startCycle: null,
      timeRange: '',
      startTime: '',
      endTime: ''
    }
  },
  mounted() {
    this.$nextTick(
      this.toImage()
    )
    var that = this
    window.addEventListener('popstate', function() {
      debugger
      that.$router.replace('/example/tree')
    })
  },
  methods: {
    toImage() {
      html2canvas(this.$refs.imageWrapper, {
        backgroundColor: null
      }).then((canvas) => {
        const dataURL = canvas.toDataURL('image/png')
        this.dataURL = dataURL
        this.show = true
      })
    }
  },
  destoryed() {
    window.removeEventListener('popstate')
  }
}
</script>
<style lang="scss">
.imageWrapper{
  width: 100%;
  height: 100%;
  .content{
    background: #fff;
  }
  .dn{
    display: none;
  }
  .mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    .img{
      width: 80%;
      display: inline-block;
      // margin: 0 auto;
      border: 1px solid black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
.block{
  width: 100%;
  .el-date-editor{
    width: 600px;
  }
}
</style>

