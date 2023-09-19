<template>
    <div>
        <!-- <Navbar /> -->
        <div class="firsttitle">
            <p>{{ firstTitle }}</p>
        </div>

        <el-table :data="tableData" class="tableData" size="large" height="600" :row-class-name="tableRowClassName">
            <el-table-column prop="id" label="id" width="150" />
            <el-table-column prop="time" label="时长" width="150" />
            <el-table-column prop="state" label="状态" width="150" />
            <el-table-column prop="analyzeResult" label="分析结果" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="large" @click="handleClick(scope.row)">Analyze</el-button>
                    <!-- <el-button link type="primary" size="large">Edit</el-button> -->
                </template>
            </el-table-column>
            <!-- <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" /> -->
        </el-table>
    </div>
</template>


<script lang="ts" setup>
import Navbar from '../components/Navbar.vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
var firstTitle = ''
switch (route.params.sceneType) {
    case 'scene_0':
        firstTitle = '课堂'
        break;
    case 'scene_1':
        firstTitle = '厨房'
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

interface User {
    id: string,
    time: string,
    state: string,
    analyzeResult: string
}

const tableRowClassName = ({
    row,
    rowIndex,
}: {
    row: User
    rowIndex: number
}) => {
    if (row.state === '待分析') {
        return 'primary-row'
    } else if (row.state === '分析中') {
        return 'info-row'
    } else if (row.state === '异常') {
        return 'danger-row'
    } else if (row.state === '正常') {
        return 'success-row'
    }
    return ''
}

// TODO：从接口获取数据，以sceneType为索引
const tableData: User[] = [
    {
        id: '1',
        time: '1',
        state: '待分析',
        analyzeResult: "分析结果"
    },
    {
        id: '2',
        time: '1',
        state: '分析中',
        analyzeResult: "分析结果"
    },
    {
        id: '3',
        time: '1',
        state: '异常',
        analyzeResult: "分析结果"
    },
    {
        id: '4',
        time: '1',
        state: '正常',
        analyzeResult: "分析结果"
    },
    {
        id: '5',
        time: '1',
        state: '待分析',
        analyzeResult: "分析结果"
    },
    {
        id: '6',
        time: '1',
        state: '分析中',
        analyzeResult: "分析结果"
    },
    {
        id: '7',
        time: '1',
        state: '正常',
        analyzeResult: "分析结果"
    },
    {
        id: '8',
        time: '1',
        state: '异常',
        analyzeResult: "分析结果"
    },
]
</script>

<style lang="scss">
.firsttitle {
    p {
        text-align: left;
        padding-left: 30px;
        font-weight: 1000;
        font-family: 'Times New Roman', Times, serif;
        font-size: 20px;
        padding-top: 10px;
    }
}

.tableData {
    width: auto;
    margin: 20px 33px;
    font-size: 18px;
}

// .el-table .primary-row {
//     --el-table-tr-bg-color: var(--el-color-primary-light-7);
// }

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