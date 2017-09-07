var gulp=require("gulp"),
server=require("gulp-webserver"),
urlTool=require("url"),
data=[
     {
     	imgs:"img/8.jpg",
     	h2s:"一说 智能机器人 S1儿童陪伴机器人 玩具 早教故事机",
     	us:"￥14.9",
     	ems:"￥0.246",
     	strongs:1
     },
     {
         imgs:"img/6.jpg",
     	h2s:"一说 智能机器人 S1儿童陪伴机器人 玩具 早教故事机",
     	us:'￥14.9',
     	ems:"0.24kg",
     	strongs:2
     },
     {
     	imgs:"img/7.jpg",
     	h2s:"[天猫超市] 达利园 瑞士卷蛋糕(草莓味)240g/贷(12枚)",
     	us:'￥10.9',
     	ems:"0.244kg",
     	strongs:3
     },
     {
     	imgs:"img/6.jpg",
     	h2s:"[天猫超市] 可比克素我任性2+1贷薯片122g休闲膨化办公室零食",
     	us:"￥898",
     	ems:"￥1280",
     	strongs:1
     }


]
gulp.task("server",function(){
	gulp.src(".")
	     .pipe(server({
	     	port:8008,
	     	middleware:function(req,res){
	     		res.setHeader("Access-Control-Allow-Origin","*")
	     		var method=req.method,
	     		pathname=urlTool.parse(req.url).pathname;
                    console.log(method)
	     		if(method==="GET"){
	     			switch(pathname){
	     				case "/index":
	     				res.setHeader("content-type","application/json;charset=utf-8")
	     				res.write(JSON.stringify(data))
                              res.end()
	     			 }
	     		}else if(method==="POST"){
	     			var postData=""
	     			res.on("data",function(chunk){
	     				postData+=chunk;
	     			})
	     			re.on("end",function(chunk){
	     				console.log(postData)
	     			})

	     		}
	     	}
	     }))
})

gulp.task("default",["server"])
