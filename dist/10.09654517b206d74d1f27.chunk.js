webpackJsonp([10],{55:function(t,e,a){var s=a(5)(a(70),a(82),null,null);s.options.__file="/home/zxh/gowork/src/bytom_explorer/src/views/assets.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] assets.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},70:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(a(6),a(2));e.default={data:function(){return{assetVal:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",daterange:[],tblHead:[{title:"资产ID",key:"asset_id",width:520,align:"center",render:function(t,e){return t("router-link",{class:"hashLink",attrs:{to:"/asset/"+e.row.asset_id}},e.row.asset_id)}},{title:"总发行量",key:"total_amount",render:function(t,e){return t("span",s.a.numberFormat(e.row.total_amount))}},{title:"小数位数",key:"decimals"},{title:"时间",key:"s_timestamp",render:function(t,e){return t("span",s.a.dateformat(e.row.s_timestamp))}},{title:"资产名称",key:"name"},{title:"资产单位",key:"symbol"},{title:"资产描述",key:"description"}],tblData:{pagination:{current:1,limit:15,total:0}}}},methods:{onSearchBlocks:function(){var t="/api/v2/assets?page="+this.tblData.pagination.current+"&limit="+this.tblData.pagination.limit;s.a.HttpGet(this,t,"tblData")},onChangePage:function(t){this.tblData.pagination.current=t,this.onSearchBlocks()},onPageSize:function(t){this.tblData.pagination.limit=t,this.onSearchBlocks()},onSearch:function(){if(!/\w+/.test(this.assetVal))return void this.$Message.warning("请输入正确的资产ID");this.$router.push("/asset/"+this.assetVal)}},mounted:function(){this.onSearchBlocks()}}},82:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"subTitle"},[t._v("比原资产")]),t._v(" "),a("Row",{staticClass:"searchBar"},[a("Col",{attrs:{span:"24"}},[t._v("\n            资产ID "),a("Input",{staticStyle:{width:"360px"},attrs:{placeholder:"资产ID"},model:{value:t.assetVal,callback:function(e){t.assetVal=e},expression:"assetVal"}}),t._v(" "),a("Button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("搜索")])],1)],1),t._v(" "),a("Table",{attrs:{columns:t.tblHead,data:t.tblData.assets,"no-data-text":"小原正在努力加载数据中..."}}),t._v(" "),t.tblData.pagination.total>0?a("Page",{staticClass:"pager",attrs:{total:t.tblData.pagination.total,"page-size-opts":[10,15,20],"page-size":t.tblData.pagination.limit,"show-sizer":""},on:{"on-change":t.onChangePage,"on-page-size-change":t.onPageSize}}):t._e()],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});