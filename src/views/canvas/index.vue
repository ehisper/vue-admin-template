<template>
  <div>
    <canvas id="canvas" width="500" height="500"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    var can = document.getElementById('canvas')
    var ctx = can.getContext('2d')
    console.log('ctx', ctx)
    ctx.clearRect(0, 0, can.width, can.height)
    ctx.fillStyle = '#ddd'
    ctx.fillRect(10, 10, 130, 130)
    var path = new Path2D()
    path.moveTo(0, can.height)
    path.lineTo(120, 120)
    path.moveTo(60, 60)
    path.lineTo(100, 100)
    ctx.stokeStyle = 'yellow'
    ctx.stroke(path)

    // path.arc(75, 75, 50, 0, Math.PI*2, true);
    // path.moveTo(110,75);
    // path.arc(75, 75, 35, 0, Math.PI, false);
    // path.moveTo(65, 65);
    // path.arc(60, 65, 5, 0, Math.PI*2, true);
    // path.moveTo(95, 65);
    // path.arc(90, 65, 5, 0, Math.PI*2, true);
    // ctx.strokeStyle = '#0000ff';
    // ctx.stroke(path);

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.shadowOffsetX = 2;
    // ctx.shadowOffsetY = 2;
    // ctx.shadowBlur = 2;
    // ctx.shadowColor = '#666666';
    // ctx.font = '24px Arial';
    // ctx.fillStyle = '#333333';
    // ctx.fillText('带阴影的文字', 20, 40);
  }
}
</script>
<style>

</style>

