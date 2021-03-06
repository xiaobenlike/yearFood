import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './components/myfamily'
import './css/commons.css'
/*import './js/check.js'*/

Vue.config.productionTip=false;

const baseUrl="http://192.168.32.75/";
//const baseUrl="http://m.tool.114la.com";

//启用rem单位
function initrem(){
	var _w=750;
	var nw=window.innerWidth||document.documentElement.clientWidth;
	if(nw>_w){
		nw=_w;
	}
	document.documentElement.style.fontSize=(nw/_w)*100+'px';
}
initrem();
window.addEventListener('resize',initrem);
window.addEventListener('orientationchange',initrem);

Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);

let url=window.location.href;
let pathurl=url.split("?")[0].split("#")[0];
let workid=pathurl.substring(pathurl.lastIndexOf("/")+1);
if(!workid){
	alert("缺少关键的作品ID");
	window.location.href='/family_index.html';
}


//document.domain="114la.com";
const store=new Vuex.Store({
	state:{
		workid:workid
	},
	mutations:{

	},
	actions:{

	},
	getters:{

	}
});


//启动Vue
new Vue({
	el:"#root",
	store,
	template:'<App/>',
	components:{ App },
	created(){
		var th=this;
		/*Axios.get('citydatas').then(res=>{
			th.$store.commit('savecitys',res.data);
			//设置默认选中的城市，现选第一个默认城市，可以改成热门城市的第一个城市。
			th.$store.commit('checkcity',res.data.lists[0].id);
		});*/

		//获取拼音查询的列表
		//测试地址为'/json/chengyu'

	}
});