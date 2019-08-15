<template>
  <div id="tab">
    <div v-rainbow-background class="tab-item">商品</div>
    <div v-rainbow-background class="tab-item">评论</div>
    <div v-rainbow-background class="tab-item">商家</div>
  </div>
</template>

<script>
  export default {
    name: 'Tab'
  }
</script>

<style lang="stylus" scoped>
  /*，
  flex ：flex-grow ，flex-shrink ，flex-basis 弹性布局
  flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
  flex-grow ：flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
  设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
  */
  #tab{
    display: flex
    .tab-item{
      flex:auto //平分宽度
      height:40px
      line-height 40px
      text-align center
    }
    /*.tab-item3{
      flex:2
      !*width: 33.3%*!
      height:40px
      line-height 40px
      text-align center
    }*/
  }

</style>
