<template>
    <div class="container">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ firstTitle }}场景</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="handle-box">
            <el-select v-model="query.state" placeholder="分析状态" class="handle-select mr10">
                <el-option key="1" label="已分析" value="已分析"></el-option>
                <el-option key="2" label="待分析" value="待分析"></el-option>
                <el-option key="1" label="分析中" value="分析中"></el-option>
                <el-option key="2" label="异常" value="异常"></el-option>
            </el-select>
            <el-input v-model="query.name" placeholder="视频名" class="handle-input mr10"></el-input>
            <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
        </div>

        <el-table :data="tableData" border class="tableData" size="large" height="600"
            header-cell-class-name="table-header">
            <el-table-column fixed="left" prop="id" label="id" width="55" align="center" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="time" label="时长" width="150" />
            <el-table-column prop="state" label="状态" width="150" />
            <el-table-column label="状态" align="center">
                <template #default="scope">
                    <el-tag :type="scope.row.state === '已分析' ? 'success' : scope.row.state === '异常' ? 'danger'
                        : scope.row.state === '待分析' ? 'info' : ''">
                        {{ scope.row.state }}
                    </el-tag>
                </template>
            </el-table-column>

            <el-table-column prop="analyzeResult" label="分析结果" />
            <el-table-column prop="analyzeTime" label="分析时间" />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="large" @click="handleClick(scope.row)">Analyze</el-button>
                </template>
            </el-table-column>


        </el-table>
        <div class="pagination">
            <el-pagination background layout="total, prev, pager, next" :current-page="query.pageIndex"
                :page-size="query.pageSize" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { ref, reactive } from 'vue';
import { Delete, Edit, Search, ArrowRight } from '@element-plus/icons-vue';
const route = useRoute();

var firstTitle = ''
const getTitle = (route: any) => {
    switch (route.params.sceneType) {
        case 'scene_0':
            firstTitle = '课堂'
            break;
        case 'scene_1':
            firstTitle = '家庭'
            break;
        case 'scene_2':
            firstTitle = '科技馆'
            break;
        case 'scene_3':
            firstTitle = '校园'
            break;
        default:
            break;
    }
}
getTitle(route);
onBeforeRouteUpdate(to => {
    getTitle(to);
});

const router = useRouter()
const handleClick = (row) => {
    console.log(row)
    router.push({
        name: 'analyze',
        params: {
            sceneType: route.params.sceneType,
            videoId: 'id_' + row.id
        }
    })
}

const query = reactive({
    state: '',
    name: '',
    pageIndex: 1,
    pageSize: 10 //一页显示数量
});

// // 获取表格数据
// const getData = () => {
// 	fetchData().then(res => {
// 		tableData.value = res.data.list;
// 		pageTotal.value = res.data.pageTotal || 50;
// 	});
// };
// getData();
// 分页导航
const handlePageChange = (val: number) => {
    query.pageIndex = val;
    // getData();
};
// 查询操作
const handleSearch = () => {
    query.pageIndex = 1;
    // getData();
};
interface User {
    id: string,
    name: string,
    time: string,
    state: string,
    analyzeResult: string,
    analyzeTime: string,
}


// TODO：从接口获取数据，以sceneType为索引
const tableData: User[] = [
    {
        id: '1',
        name: '视频1',
        time: '1',
        state: '待分析',
        analyzeResult: "分析结果",
        analyzeTime: "2023-09-25 22:00"
    },
    {
        id: '2',
        name: '视频2',
        time: '1',
        state: '分析中',
        analyzeResult: "分析结果",
        analyzeTime: "2023-09-25 22:00"

    },
    {
        id: '3',
        name: '视频3',
        time: '1',
        state: '异常',
        analyzeResult: "分析结果",
        analyzeTime: "2023-09-25 22:00"
    },
    {
        id: '4',
        name: '视频4',
        time: '1',
        state: '已分析',
        analyzeResult: "分析结果",
        analyzeTime: "2023-09-25 22:00"
    },
    {
        id: '5',
        name: '视频5',
        time: '1',
        state: '待分析',
        analyzeResult: "分析结果",
        analyzeTime: "2023-09-25 22:00"
    },
    {
        id: '6',
        name: '视频6',
        time: '1',
        state: '分析中',
        analyzeResult: "分析结果",
        analyzeTime: "2023-09-25 22:00"
    },
    {
        id: '7',
        name: '视频7',
        time: '1',
        state: '已分析',
        analyzeResult: "分析结果",
        analyzeTime: "2023-09-25 22:00"
    },
    {
        id: '8',
        name: '视频8',
        time: '1',
        state: '异常',
        analyzeResult: "分析结果",
        analyzeTime: "2023-09-25 22:00"
    },
]
const pageTotal = tableData.length;
</script>

<style lang="scss">
.container {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;

    .el-breadcrumb {
        font-size: 18px;
        padding-bottom: 15px;
        font-family: 'Times New Roman', 'Courier New', Times, serif;
    }

    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
    }

    .mr10 {
        margin-right: 10px;
    }

    .tableData {
        width: 100%;
        // margin: 20px 33px;
        font-size: 14px;
    }

    .table-header {
        color: #777679;
        /* 表头文字颜色 */
        font-weight: bold;
        /* 表头文字加粗 */
        // text-align: center;//文字居中对齐
        font-size: 16px;
    }
}

//表头单元格更改背景颜色， !important提高优先级
.el-table th {
    background-color: #f5f7fa !important;
}

.firsttitle {
    p {
        text-align: left;
        // padding-left: 30px;
        font-weight: 1000;
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
}






.el-table .info-row {
    --el-table-tr-bg-color: var(--el-color-info-light-7);
}

.el-table .danger-row {
    --el-table-tr-bg-color: var(--el-color-danger-light-7);
}

.el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-7);
}
</style>

<!-- 
//根据state改变一行背景颜色
// :row-class-name="tableRowClassName" 
// const tableRowClassName = ({
    //     row,
    //     rowIndex,
    // }: {
    //     row: User
    //     rowIndex: number
    // }) => {
    //     if (row.state === '待分析') {
    //         return 'primary-row'
    //     } else if (row.state === '分析中') {
    //         return 'info-row'
    //     } else if (row.state === '异常') {
    //         return 'danger-row'
    //     } else if (row.state === '正常') {
    //         return 'success-row'
    //     }
    //     return ''
    // } 
-->