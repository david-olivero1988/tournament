<template>
    <footer>
        <div>
        <md-content>Background</md-content>
        <md-content class="md-primary">Primary</md-content>
        <md-content class="md-accent">Accent</md-content>
        <md-content class="md-accent">Accent</md-content>
    </div>
    </footer>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: white;
   text-align: center;
}

  .md-content {
    width: 25%;
    height: 200px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
</style>
