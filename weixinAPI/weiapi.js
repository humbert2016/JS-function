	/**
     * 定义WeixinApi
     */
    var WeixinApi = {
        version: 1.0
    };

	if (typeof define === 'function' && (define.amd || define.cmd)) {
        if (define.amd) {
            // AMD 规范，for：requirejs
            define(function () {
                return WeixinApi;
            });
        } else if (define.cmd) {
            // CMD 规范，for：seajs
            define(function (require, exports, module) {
                module.exports = WeixinApi;
            });
        }
    }

	WeixinApi.ready = function(config){
		wx.config({
			debug: config.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: config.appId, // 必填，公众号的唯一标识
			timestamp: config.timestamp, // 必填，生成签名的时间戳
			nonceStr: config.nonceStr, // 必填，生成签名的随机串
			signature: config.signature,// 必填，签名，见附录1
			jsApiList: [
				"onMenuShareTimeline",
			    "onMenuShareAppMessage",
			    "onMenuShareQQ",
			    "onMenuShareWeibo",
			    "onMenuShareQZone",
			    "startRecord",
			    "stopRecord",
			    "onVoiceRecordEnd",
			    "playVoice",
			    "pauseVoice",
			    "stopVoice",
			    "onVoicePlayEnd",
			    "uploadVoice",
			    "downloadVoice",
			    "chooseImage",
			    "previewImage",
			    "uploadImage",
			    "downloadImage",
			    "translateVoice",
			    "getNetworkType",
			    "openLocation",
			    "getLocation",
			    "hideOptionMenu",
			    "showOptionMenu",
			    "hideMenuItems",
			    "showMenuItems",
			    "hideAllNonBaseMenuItem",
			    "showAllNonBaseMenuItem",
			    "closeWindow",
			    "scanQRCode",
			    "chooseWXPay",
			    "openProductSpecificView",
			    "addCard",
			    "chooseCard",
			    "openCard",
			]
		});
	}
//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
	WeixinApi.onMenuShareTimeline = function(data){	
		wx.ready(function(){
			wx.onMenuShareTimeline({
				title: data.title, // 分享标题
				link: data.link, // 分享链接
				imgUrl: data.imgUrl, // 分享图标
				success: function () { 
					// 用户确认分享后执行的回调函数
					data.successCallBack();
				},
				cancel: function () { 
					// 用户取消分享后执行的回调函数
					data.cancelCallBack();
				}
			});
		});
	}


//获取“分享给朋友”按钮点击状态及自定义分享内容接口
	WeixinApi.onMenuShareAppMessage = function(data){
		wx.ready(function(){
			wx.onMenuShareAppMessage({
				title: data.title, // 分享标题
				desc: data.desc, // 分享描述
				link: data.link, // 分享链接
				imgUrl: data.imgUrl, // 分享图标
				type: data.type, // 分享类型,music、video或link，不填默认为link
				dataUrl: data.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
				success: function () { 
					// 用户确认分享后执行的回调函数
					data.successCallBack();
				},
				cancel: function () { 
					// 用户取消分享后执行的回调函数
					data.cancelCallBack();
				}
			});
		});
	}

//获取“分享到QQ”按钮点击状态及自定义分享内容接口
	WeixinApi.onMenuShareQQ = function(data){
		wx.ready(function(){
			wx.onMenuShareQQ({
			    title: data.title, // 分享标题
			    desc: data.desc, // 分享描述
			    link: data.link, // 分享链接
			    imgUrl: data.imgUrl, // 分享图标
			    success: function () { 
			       // 用户确认分享后执行的回调函数
			       data.successCallBack();
			    },
			    cancel: function () { 
			       // 用户取消分享后执行的回调函数
			       data.cancelCallBack();
			    }
			});
		});
	}
	
//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
	WeixinApi.onMenuShareWeibo = function(data){
		wx.ready(function(){
			wx.onMenuShareWeibo({
			    title: data.title, // 分享标题
			    desc: data.desc, // 分享描述
			    link: data.link, // 分享链接
			    imgUrl: data.imgUrl, // 分享图标
			    success: function () { 
			       // 用户确认分享后执行的回调函数
			       data.successCallBack();
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			        data.cancelCallBack();
			    }
			});
		});
	}
	
//获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
	WeixinApi.onMenuShareQZone = function(data){
		wx.ready(function(){
			wx.onMenuShareQZone({
			    title: data.title, // 分享标题
			    desc: data.desc, // 分享描述
			    link: data.link, // 分享链接
			    imgUrl: data.imgUrl, // 分享图标
			    success: function () { 
			       // 用户确认分享后执行的回调函数
			       data.successCallBack();
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			        data.cancelCallBack();
			    }
			});
		});
	}

// 拍照或从手机相册中选图接口
	WeixinApi.chooseImage = function(data){
		wx.ready(function(){
			wx.chooseImage({
			    count: 1, // 默认9
			    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
			    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
			    success: function (res) {
			        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
			    }
			});
		});		
	}


	/* 预览图片 */
	WeixinApi.previewImage = function(data){
		wx.ready(function(){
			wx.previewImage({
			    current: data.current, // 当前显示图片的http链接
			    urls: data.urls // 需要预览的图片http链接列表
			});
		});
	}


// 拍上传图片接口
	WeixinApi.uploadImage = function(data){
		wx.ready(function(){
			wx.uploadImage({
				localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
				isShowProgressTips: 1, // 默认为1，显示进度提示
				success: function (res) {
				    var serverId = res.serverId; // 返回图片的服务器端ID
				}
			});
		});		
	}

// 下载图片接口
	WeixinApi.downloadImage = function(data){
		wx.ready(function(){
			wx.downloadImage({
			    serverId: '', // 需要下载的图片的服务器端ID，由uploadImage接口获得
			    isShowProgressTips: 1, // 默认为1，显示进度提示
			    success: function (res) {
			        var localId = res.localId; // 返回图片下载后的本地ID
			    }
			});
		});		
	}


//使用微信内置地图查看位置接口
	WeixinApi.openLocation =function(data){
		wx.ready(function(){
			wx.openLocation({
			    latitude:data.latitude, // 纬度，浮点数，范围为90 ~ -90
			    longitude:data.longitude, // 经度，浮点数，范围为180 ~ -180。
			    name:data.name, // 位置名
			    address:data.address, // 地址详情说明
			    scale:16, // 地图缩放级别,整形值,范围从1~28。默认为最大
			    infoUrl:data.infoUrl // 在查看位置界面底部显示的超链接,可点击跳转
			});
		});
	}

//获取地理位置接口
	WeixinApi.getLocation =function(data){
		wx.ready(function(){
			wx.getLocation({
			    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
			    success: function (res) {
			        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
			        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
			        var speed = res.speed; // 速度，以米/每秒计
			        var accuracy = res.accuracy; // 位置精度
			        nowlocation(res);
			    }
			});
		});
	}


	/* 调用微信支付方法 */
	WeixinApi.pay = function($getBrandWCPayRequest, callback){
		function onBridgeReady(){
			WeixinJSBridge.invoke(
				'getBrandWCPayRequest', {
				"appId": $getBrandWCPayRequest.appId,
				"timeStamp": $getBrandWCPayRequest.timeStamp.toString(),         
				"nonceStr": $getBrandWCPayRequest.nonceStr, 
				"package": $getBrandWCPayRequest.package,     
				"signType": "MD5",           
				"paySign": $getBrandWCPayRequest.paySign 
			},
			function(res){     
				if(res.err_msg == "get_brand_wcpay_request:ok" ) {
					callback();
				}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
			}); 
		}
		if (typeof WeixinJSBridge == "undefined"){
			if( document.addEventListener ){
				document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
			}else if (document.attachEvent){
				document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
				document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
			}
		}else{
			onBridgeReady();
		}
	}