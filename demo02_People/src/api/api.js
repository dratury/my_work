import http from "../utils/httpRequest"
import store from '../store'
console.log("token:", `Bearer ${store.state.tokenInfo}`);
// 登录接口
const loginFn = (params) => http.post(http.httpUrl("/sys/login"), { mobile: params.mobile, password: params.password })

// 王的api
const wzj_tabulation = () => http.get(http.httpUrl("/company/department"), {
	headers: {
		Authorization: `Bearer ${store.state.tokenInfo}`
	}
})
const wzj_monthly = (data) => http.get(http.httpUrl("/attendances"), {
	page: data.page, pagesize: data.pagesize,
	headers: {
		Authorization: `Bearer ${store.state.tokenInfo}`
	}
})
// 设置--出勤设置
const wzj_chuQin = () => http.put(http.httpUrl("/cfg/atte"))
// 设置--请假设置
const wzj_qingJia = (data) => http.post(http.httpUrl("cfg/leave/list"), { departmentId: data })


// 张的api
// 获取审批列表
const ShenPiFn = (data) => http.put(http.httpUrl("/user/process/instance/1/10"), {
	page: data.page, pageSize: data.pageSize,
	Headers: {
		Authorization: `Bearer ${store.state.tokenInfo}`
	}
})

// 流程申请
const liuChengFn = () => http.post(http.httpUrl("/user/process/startProcess"), {
	Headers: {
		Authorization: `Bearer ${store.state.tokenInfo}`
	}
})

// 加班离职
const JiaBanFn = () => http.put(http.httpUrl("/cfg/extDuty"))


// 杨的api
//组织架构
const organFn = () => http.get(http.httpUrl('/company/department'), {
	headers: {
		Authorization: `Bearer ${store.state.tokenInfo}`
	}
})

// 添加组织
const addOrganFn = (params) => http.post(http.httpUrl('//company/department'), { params }, {
	headers: {
		Authorization: `Bearer ${store.state.tokenInfo}`
	}
})

export {organFn, addOrganFn,ShenPiFn, liuChengFn, JiaBanFn, loginFn, wzj_tabulation, wzj_monthly, wzj_chuQin, wzj_qingJia }
