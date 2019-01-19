<template>
    <div class="footer fixed">
        <ul>
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/manage">人员管理</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    /* scoped，声明作用域，样式效果只在该页面内生效，不污染全局 */
    @import "../assets/css/footer.css";
</style>
