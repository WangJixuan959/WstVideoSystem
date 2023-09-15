<template>
    <div class="container">
        <Navbar />
        <SceneItem />
    </div>
</template>

<script setup>
import SceneItem from '../components/SceneItem.vue';
</script>

<style lang="scss" scoped>
.container{
    background-color:rgb(70, 103, 126);
}

.bottom {
    margin-top: 13px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}

h1, p {
  text-align: center;
  font-style: italic;
  font-weight: 1000;
  font-family: 'Times New Roman', Times, serif;
}

h1 {
  font-size: 70px;
  padding-top: 20px;
}

p {
  font-size: 30px;
  padding-top: 10px;
}
</style>