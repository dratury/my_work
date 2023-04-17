let express = require('express')
let Mock = require('mockjs')
let loginList = require('./common/login.json')
const users = require("./common/users.json")
const rights = require("./common/right.json")
let app = express()

// 登录界面
app.use('/login', function (req, res) {
	// console.log("req", req);
	res.json(
		Mock.mock({
			status: 200,
			msg: "登录成功",
			loginList
		})
	)
})

/**登录日志 */
app.use("/users", function (req, res) {
	console.log(req);
  res.json(
    Mock.mock({
      status: 200,
      msg: "登录成功",
      users
    })
  )
})


/**权限 */
app.use("/rights", function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      msg: "登录成功",
      rights
    })
  )
})


app.listen("8090", () => {
	console.log("监听端口 8090");
})
