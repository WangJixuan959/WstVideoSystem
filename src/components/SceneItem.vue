<template>
    <div class="scene" v-for="(sceneData, idx) in sceneDatas">
        <el-row>
            <el-col align="center">
                <el-carousel :interval="4000" type="card" height="400px">
                    <el-carousel-item v-for="(scene, index) in sceneData" :key="scene">
                        <RouterLink :to="{ name: 'list', params: { sceneType: 'scene_' + index } }">
                            <div class="carousel-item-content">
                                <h1>{{ sceneData[index].firstTitle }}</h1>
                                <div><img v-bind:src="scene.imgurl" class="image" /></div>
                            </div>
                        </RouterLink>
                    </el-carousel-item>

                </el-carousel>
            </el-col>
        </el-row>
    </div>
    <div class="information">
        <p>华中科技大学智能互联网实验室</p>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            // TODO：从接口拿数据
            // [{‘一级标题’，‘二级标题’， ‘详情信息’，‘显示图片路径’}, {‘一级标题’，‘二级标题’， ‘详情信息’， ‘显示图片路径’} ......]
            sceneDatas: [
                [
                    { firstTitle: "课堂",  imgurl: '/src/assets/picture/one.png' },
                    { firstTitle: "家庭",imgurl: '/src/assets/picture/two.png' },
                    { firstTitle: "科技馆", imgurl: '/src/assets/picture/two.png' },
                    { firstTitle: "校园",  imgurl: '/src/assets/picture/one.png' }
                ],

            ]
        }
    },
    methods: {
        getSceneData() {
            return null
        }
    }
}
</script>

<style lang="scss" scoped>
.bottom {
    margin-top: 13px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.image {
    width: auto;
    height: 300px;
}

.scene {
    margin: 0 80px 0 80px;
    height: 450px;

    a {
        text-decoration: none;
        color: white;
    }

    .el-carousel {
        padding-top: 20px;
        width: 1300px;

        .carousel-item-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            line-height: 50px;
        }

        .el-carousel__item {
            background-color: rgb(105, 123, 143);
        }
    }
}

.information {
    font-size: 18px;
    color: white;
    padding-bottom: 10px;
    text-align: center;
    letter-spacing: 2px; //字间距
}
</style>