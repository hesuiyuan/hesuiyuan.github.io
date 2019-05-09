//index heat map start
//var Alldata;
//$.ajax({
//type: "GET",
//url: "json/DW.json",
//dataType: "json",
//async:false,
//success: function (data){ 
//      Alldata=data;
//  },
// error:function(error){
// 	console.log(error)
// }
//});
		var myChart = echarts.init(document.getElementById('main'));
		var box=document.getElementsByClassName('.box');      
    var geoCoordMap = {
          			"榆林": [109.8743, 38.205],
					"延安": [109.487127,36.562874],
					"汉中": [106.886, 33.0139],
					"安康": [109.3, 32.8],
					"商洛": [109.8083, 33.761],
					"宝鸡": [107.1826, 34.3433],
					"渭南": [109.7864, 35.0299],
					"咸阳": [108.4131, 34.8706],
					"西安": [109.1162, 34.2004],
					"铜川": [109.0393, 35.1947],
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
        }
    }
    return res;
};
option = {
    visualMap: {
    	show:false,
        min: 0,
        max: 1000,
        splitNumber: 5,
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba','#369','#666','#963'].reverse()
        },
        textStyle: {
            color: '#000',
        }
    },
    geo: {
        map: '陕西',
        zoom:10, //当前视角的缩放比例
        top: '-140%',
		left: '25%',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
                normal: {
                    borderWidth: 1,//区域边框宽度
                    borderColor: '#1fdaf6',//区域边框颜色
                    areaColor:"#1c8de5",//区域颜色
                        },
                emphasis: {
                    borderWidth: 1,
                    borderColor: '#4b0082',
                    areaColor:"#00f0ff",
                        }
                    },
        label: {
                normal: {
                	textStyle:{color:"#fff",fontWeight : 'bold',fontSize : 15},//省份标签字体颜色
                    show: true,
                },
                emphasis: {
                	textStyle:{color:"#fff",fontSize : 15,fontWeight : 'bold'},
                    show: true,
                    fontSize: 12,
                }
            },
    },
    series: [
    {
        name: 'AQI',
        type: 'heatmap',
        coordinateSystem: 'geo',
        data: convertData([
            {name: "延安", value: 839},
            {name: "汉中", value: 559},
            {name: "安康", value: 169},
            {name: "商洛", value: 979},
            {name: "宝鸡", value: 279},
            {name: "渭南", value: 179},
            {name: "咸阳", value: 979},
            {name: "西安", value: 379},
            {name: "铜川", value: 779},
            {name: "商洛市丹凤县宇泰粮食库", value: 1000}, 
        ])
    }]
};
				setTimeout(function() {
					myChart.setOption(option);
				}, 100);
			myChart.on('click',function(params){
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'js/cs.js';
		head.appendChild(script);
				 $("#main").hide();
				 $("#city").show();
				 $('.app').hide();
				 $('.app2').hide();
				 $('#copysmall').show();
				 $('.con_top_content').hide();
				 $('.con_bottom_content').hide();
				 $('.copysmall_small_icon').show();
				 var Frist=function(){
				 	$("#city").show();
				 	$(".company_text").hide();
					//陕西地图点击点得判断
					if (params.componentType=='series') {
						 if(params.componentSubType==='effectScatter'){
						 	if(params.seriesIndex===2){
						 	    window.open('http://www.baidu.com');		
						 	}
						 }
					} else{
					  
					//DW数据开始操作
				var cityChart=echarts.init(document.getElementById('city'));
					//对应市级地图
			$.get(datas[params.name][0]['url'],function(one){
				echarts.registerMap(datas[params.name][0]['name'], one)
				//内容开始
				var data = Alldata['shanxicity'];
				var geoCoordMap =Alldata['Latlong'][0];
				var data1 = Alldata['shanxilibrary'];
				var geoCoordMap1 =Alldata['libraryLatlong'][0];
				var convertData1 = function(data1) {
					var res = [];
					for(var i = 0; i < data1.length; i++) {
						var geoCoord1 = geoCoordMap1[data1[i].name];
						if(geoCoord1) {
							res.push({
								name: data1[i].name,
								value: geoCoord1.concat(data1[i].value)
							});
						};
					};
					return res;
				};
				var convertedData1 = [
					convertData1(data1),
					convertData1(data1.sort(function(a, b) {
						return b.value - a.value;
					}).slice(0, 6))
				];
				data1.sort(function(a, b) {
					return a.value - b.value;
				});

				var convertData = function(data) {
					var res = [];
					for(var i = 0; i < data.length; i++) {
						var geoCoord = geoCoordMap[data[i].name];
						if(geoCoord) {
							res.push({
								name: data[i].name,
								value: geoCoord.concat(data[i].value)
							});
						};
					};
					return res;
				};
				var convertedData = [
					convertData(data),
					convertData(data.sort(function(a, b) {
						return b.value - a.value;
					}).slice(0, 6))
				];
				var selectedItems = [];
				var categoryData = [];
				var barData = [];
				//   var maxBar = 30;
				var sum = 0;
				var count = data.length;
				var data = datas[params.name][1];
				var geoCoordMap = datas[params.name][3]['num1'][0];
				var data1=  datas[params.name][2];
				var convertedData1 = [
					convertData1(data1),
					convertData1(data1.sort(function(a, b) {
						return b.value - a.value;
					}).slice(0, 6))
				];
				//显示对应的县
				var convertData = function(data) {
					var res = [];
					for(var i = 0; i < data.length; i++) {
						var geoCoord = geoCoordMap[data[i].name];
						if(geoCoord) {
							res.push({
								name: data[i].name,
								value: geoCoord.concat(data[i].value)
							});
						}
					}
					return res;
				};
				var convertedData = [
					convertData(data),
					convertData(data.sort(function(a, b) {
						return b.value - a.value;
					}).slice(0, 6))
				];
				//图表内容
				 //图表内容
				option = {
					backgroundColor: 'transparent', //图表背景颜色
					animation: true,
					animationDuration: 500, //地址点出现的快慢
					animationEasing: 'cubicInOut',
					animationDurationUpdate: 100,
					animationEasingUpdate: 'cubicInOut', //动画
					//地理坐标系，用于绘制地图
					geo: {
						map: datas[params.name][0]['name'],
						top:datas[datas[params.name][0]['name']+'市'][0].postion[0]+'%',
						left: datas[datas[params.name][0]['name']+'市'][0].postion[1]+'%',	
						center: geoCoordMap[datas[params.name][0]['name']+'市'],
						zoom:0.9, //当前视角的缩放比例
						label: {
							emphasis: {
								show: false
							}
						},
						roam: true, //是否允许缩放移动
						//地图区域的多边形样式
						itemStyle: {
							normal: {
								borderWidth: 1, //区域边框宽度
								borderColor: '#fff', //区域边框颜色
								areaColor: "#1C8DE5", //区域颜色
							},
							//高亮状态下的样式
							emphasis: {
								borderWidth: 1,
								borderColor: '#ffffff',
								areaColor: "rgba(3,157,229,0.5)",

							}
						}
					},
					series: [{
							name: '库存粮油总量',
							type: 'scatter', //散点图类型
							coordinateSystem: 'geo', //使用的坐标系-地理坐标系
							data: convertedData[0],
							symbolSize: function(val) {
								return Math.max(val[2] / 300, 8);
							}, //标记散点的大小
							zlevel: 0,
							z: 0,
							label: {
								normal: {
									formatter: '{b}',
									position: 'right',
									show: true
								},
								emphasis: {
									show: true
								}
							},
							//市级地图地址的颜色
							itemStyle: {
								normal: {
									color: '#fff',
									position: 'right',
									show: true
								}
							}
						},
						{
							name: '',
							type: 'effectScatter', //带有涟漪效果的散点图
							coordinateSystem: 'geo',
							data: convertedData1[0],
							zlevel: 0,
							z: 0,
							symbolSize: function(val) {
								return Math.max(val[2] / 500, 8);
							},
							showEffectOn: 'render',
							rippleEffect: {
								brushType: 'stroke'
							},
							hoverAnimation: true,
							label: {
								normal: {
									formatter: '{b}',
									position: 'right',
									show: true
								}
							},
							//市级地图颜色
							itemStyle: {
								normal: {
									color: '#f4e925',
									shadowBlur: 50,
									shadowColor: '#EE0000'
								}
							},
							zlevel: 1
						},
						 
					]
				};
				 cityChart.setOption(option);
			});
			//在市级地图上面点击的效果
			  cityChart.on('mouseover', function(params) {
			  	   if(params.seriesIndex===1){
			  	   	        var topy=params.event.offsetY+'px';
			  	   	        var leftx=params.event.offsetX+'px';
			  	   	        console.log(leftx)
			  	   		  $('.pop_up').show().css("top",topy);
			  	   		  $('.pop_up').css("left",leftx);
					   
					} 
					});
//		    提示框点击事件
			 cityChart.on('mouseout',function(params){
			  	  if(params.seriesIndex===1){
			  	  	console.log(0)
			  	   		  $('.pop_up').hide().css("top","0px","left","0px");					  
					   
					}
			 });
			//单击事件
//			cityChart.on('click',function(params){
//				 if(params.seriesIndex===1){
//						window.open('http://www.hao123.com');
//					}else{
//						return;
//					};
//			});
			 };
			 
				 }
				 	Frist();
			})
