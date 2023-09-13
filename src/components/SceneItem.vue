<template>
    <div class="scene" v-for="(sceneData, idx) in sceneDatas">
        <h1>{{ sceneData[0].firstTitle }}</h1>
        <el-row>
            <el-col v-for="(scene, index) in sceneData" :key="scene" :span="5" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image" />
                    <div style="padding: 9px">
                        <span>{{scene.secondTitle}}</span>
                        <div class="bottom">
                            <span>{{scene.detail}}</span>
                            <el-button text class="button">Operating</el-button>
                        </div>
                    </div>
                    <!-- <slot name="img"></slot>
                    <slot name="text"></slot> -->
                </el-card>
            </el-col>
        </el-row>
        <el-button type="primary" text class="btn">See More</el-button>
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
                    { firstTitle: "课堂", secondTitle: '二级标题1', detail: '二级标题1详情', imgurl:'' },
                    { firstTitle: "课堂", secondTitle: '二级标题2', detail: '二级标题2详情', imgurl:'' },
                    { firstTitle: "课堂", secondTitle: '二级标题3', detail: '二级标题3详情', imgurl:'' },
                    { firstTitle: "课堂", secondTitle: '二级标题4', detail: '二级标题4详情', imgurl:'' }
                ],
                // TODO：下同
                [
                    { firstTitle: "厨房", secondTitle: '二级标题1', detail: '二级标题1详情' },
                    { firstTitle: "厨房", secondTitle: '二级标题2', detail: '二级标题2详情' },
                    { firstTitle: "厨房", secondTitle: '二级标题3', detail: '二级标题3详情' },
                    { firstTitle: "厨房", secondTitle: '二级标题4', detail: '二级标题4详情' }
                ],
                [
                    { firstTitle: "科技馆", secondTitle: '二级标题1', detail: '二级标题1详情' },
                    { firstTitle: "课堂", secondTitle: '二级标题2', detail: '二级标题2详情' },
                    { firstTitle: "课堂", secondTitle: '二级标题3', detail: '二级标题3详情' },
                    { firstTitle: "课堂", secondTitle: '二级标题4', detail: '二级标题4详情' }
                ],
                [
                    { firstTitle: "校园", secondTitle: '二级标题1', detail: '二级标题1详情' },
                    { firstTitle: "课堂", secondTitle: '二级标题2', detail: '二级标题2详情' },
                    { firstTitle: "课堂", secondTitle: '二级标题3', detail: '二级标题3详情' },
                    { firstTitle: "课堂", secondTitle: '二级标题4', detail: '二级标题4详情' }
                ]
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

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}
h1 {
    padding: 30px 0;
}

.scene {
    margin: 0 80px 0 130px;
}

.btn {
    padding: 20px 0 40px 0;
}

.btn::hover {
    background-color: black;
}
</style>