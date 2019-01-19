<template>
  <div class="manage tc">
    <button @click="add">新增</button>
    <div class="input-area" v-show="showAdd">
      <input type="text" placeholder="请输入人员姓名" v-model="nameValue">
      <button @click="addName">确定</button>
    </div>
    <table>
      <tr>
        <th>姓名</th>
        <th>操作</th>
      </tr>
      <!-- 此处 v-for 必须包含强调项 :key -->
      <tr v-for="(item,index) in peoples" :key="item.index">
        <td>{{ item.name }}</td>
        <td :id="index">
          <span @click="edit">编辑</span>
          <span @click="del">删除</span>
        </td>
      </tr>
    </table>
    <div class="warp" v-show="showEdit">
      <div class="content">
        <input type="text" placeholder="请输入新名" v-model="newName">
        <button @click="cancel">取消</button>
        <button @click="editName">确定</button>
      </div>
    </div>
    <!-- 引用footer组件模板 -->
    <footer-nav :class="{'isManage':isNowPage}"></footer-nav>
  </div>
</template>

<style>
@import "../../assets/css/manage.css";
</style>


<script>
// 引入组件
import FooterNav from "../../components/footer.vue";
export default {
  // 局部注册
  components: {
    FooterNav
  },
  data() {
    return {
      isNowPage: true,
      showAdd: false,
      showEdit: false,
      peoples: [{ name: "jack" }, { name: "joe" }],
      nameValue: "",
      newName: "",
      editId: 0
    };
  },
  methods: {
    //  显示添加div
    add() {
      this.showAdd = true;
    },
    // 新增
    addName() {
      var v = this.nameValue;
      if (v.trim() == "") {
        alert("请输入新增人员姓名");
      } else {
        var data = {};
        data.name = v;
        this.peoples.push(data);
        this.nameValue = "";
      }
    },
    // 删除
    del(e) {
      var id = e.target.offsetParent.id;
      this.peoples.splice(id, 1);
    },
    // 编辑
    edit(e) {
      var id = e.target.offsetParent.id;
      this.showEdit = true;
      this.editId = id;
      this.newName = this.peoples[id].name;
    },
    // 取消编辑
    cancel() {
      this.showEdit = false;
    },
    // 确认编辑
    editName() {
      var v = this.newName;
      if (v.trim() == "") {
        alert("请输入姓名");
      } else {
        this.peoples[this.editId].name = this.newName;
        this.showEdit = false;
      }
    }
  }
};
</script>

