<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">处理中心</el-menu-item>
    </el-menu>
    <div class="organ_box">
      <span class="organName">{{ organName.companyName }}</span>
    </div>
    <el-tree :data="organData" node-key="id" default-expand-all :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{  data }">
        <!-- <span>{{ node.label }}</span> -->
        <span>{{ data.name }}</span>
        <span style="float:right">
          <el-button type="text" size="mini">
            {{ data.manager
            }}
          </el-button>
          <el-button type="text" size="mini">
            <el-dropdown>
              <span class="el-dropdown-link">
                操作
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu>
                <el-dropdown-item @click.native="addOrganOpen(data)">添加子部门</el-dropdown-item>
                <el-dropdown-item>编辑子部门</el-dropdown-item>
                <el-dropdown-item>删除子部门</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-button>
        </span>
      </span>
    </el-tree>

    <!-- 添加 -->
    <el-dialog title="新增部门" :visible.sync="addDialogFormVisible">
      <el-form :model="organ_addForm">
        <el-form-item label="部门名称">
          <el-input v-model="organ_addForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门编码">
          <el-input v-model="organ_addForm.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门负责人">
          <el-select v-model="organ_addForm.manager" placeholder="请选择">
            <el-option
              v-for="item in organData"
              :key="item.id"
              :label="item.manager"
              :value="item.manager"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍">
          <el-input type="textarea" v-model="organ_addForm.introduce"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrgan">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { organFn,addOrganFn } from "@/api/api"
export default {
  data() {
    // const data = this.organData
    return {
      activeIndex: "1",
      organName: {},
      organData: [],
      organ_addForm: {},
      addDialogFormVisible: false,
			value:'',
			pidFu:null
			// options:organ_addForm.manager
    }
  },
  methods: {
    getOrganLIst() {
      organFn().then((resq) => {
        console.log("res", resq)
        // this.organData = res.data.depts
        this.organName = resq.data.data
        // let list=res.data.depts
        function transList(list, root) {
          const arr = []
          list.forEach((item) => {
            if (item.pid === root) {
              const children = transList(list, item.id)
              if (children.length > 0) {
                item.children = children
              }
              arr.push(item)
            }
          })
          return arr
        }
        this.organData = transList(resq.data.data.depts, "")
        // console.log("arr", this.organData)
      })
    },
    // 添加
    addOrganOpen(row) {
      this.addDialogFormVisible = true
			console.log('row',row.pid);
			console.log(this.organ_addForm);
			this.pidFu=row.pid
			this.organ_addForm=row.pid
    },
    addOrgan() {
			// console.log('11',this.organ_addForm);
			// this.organ_addForm.push(this.pidFu)
			addOrganFn(this.organ_addForm).then((res)=>{
				console.log('add_res',res);
			})
		}
  },
  mounted() {
    this.getOrganLIst()
  }
}
</script>

<style scoped>
.el-menu {
  border-bottom: 2px solid #ccc;
}

.organ_box {
  width: 1000px;
  border: 1px solid #000;
  margin-top: 50px;
  margin-left: 100px;
}
.organName {
  font-weight: 900;
  text-align: left;
}
.custom-tree-node {
  flex: 1;
  /* display: flex; */
  line-height: 40px;
  align-items: center;
  /* justify-content: space-between; */
  font-size: 14px;
  padding-right: 8px;
}

</style>
