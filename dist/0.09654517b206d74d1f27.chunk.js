webpackJsonp([0],{63:function(t,e,s){var a=s(5)(s(79),s(91),null,null);a.options.__file="/home/zxh/gowork/src/bytom_explorer/src/views/transaction.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] transaction.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},78:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{row:Object}}},79:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(s(6),s(2)),r=s(81),n=s.n(r);e.default={components:{expandRow:n.a},data:function(){return{respData:{pagination:{current:1,limit:10,total:0}},txHead:[{type:"expand",width:50,render:function(t,e){return t(n.a,{props:{row:e.row}})}},{title:"交易方式",key:"type",render:function(t,e){var s="";return"coinbase"===e.row.type?s="新生块奖励":"spend"===e.row.type?s="FORM 花费":"control"===e.row.type&&(s="TO 收入"),t("span",s)}},{title:"地址",key:"address",render:function(t,e){return"coinbase"===e.row.type?t("span","空地址"):t("router-link",{class:"hashLink",attrs:{to:"/address/"+e.row.address}},e.row.address)}},{title:"资产ID",key:"asset_id",render:function(t,e){return t("router-link",{class:"hashLink",attrs:{to:"/asset/"+e.row.asset_id}},e.row.asset_id)}},{title:"总金额",key:"amount",render:function(t,e){return t("strong",a.a.toBtm(e.row.amount,2)+" BTM")}}]}},methods:{onSearch:function(){var t=this.$route.params.txid;""===t&&(t="ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");var e="/api/v2/transaction/"+t;a.a.HttpGet(this,e,"respData")}},mounted:function(){this.onSearch()}}},81:function(t,e,s){var a=s(5)(s(78),s(90),null,null);a.options.__file="/home/zxh/gowork/src/bytom_explorer/src/views/table_expand_tx.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] table_expand_tx.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},90:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table_expand_wrap"},[s("div",{staticClass:"table_expand"},["coinbase"==t.row.type?s("div",[s("Row",[s("Col",{attrs:{span:"8"}},[s("span",{staticClass:"expand-key"},[t._v("输入: ")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.input_id))])]),t._v(" "),s("Col",{attrs:{span:"15"}},[s("span",{staticClass:"expand-key"},[t._v("自定义信息: ")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.arbitrary))])])],1)],1):"spend"==t.row.type?s("div",[s("Row",[s("Col",{attrs:{span:"8"}},[s("span",{staticClass:"expand-key"},[t._v("合约: ")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.control_program))])]),t._v(" "),s("Col",{attrs:{span:"15"}},[s("span",{staticClass:"expand-key"},[t._v("合约程序: ")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.decode_program.join(" ")))])])],1)],1):"control"==t.row.type?s("div",[s("Col",{attrs:{span:"8"}},[s("span",{staticClass:"expand-key"},[t._v("合约: ")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.control_program))])]),t._v(" "),s("Col",{attrs:{span:"15"}},[s("span",{staticClass:"expand-key"},[t._v("合约程序: ")]),t._v(" "),s("span",{staticClass:"expand-value"},[t._v(t._s(t.row.decode_program.join(" ")))])])],1):t._e()])])},staticRenderFns:[]},t.exports.render._withStripped=!0},91:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",{staticClass:"subTitle"},[t._v("交易信息")]),t._v(" "),s("div",{staticClass:"i-table"},[s("table",{attrs:{width:"100%",border:"0",cellspacing:"0",cellpadding:"0"}},[s("tr",[s("th",{attrs:{width:"12%"}},[t._v("交易ID")]),t._v(" "),s("td",{attrs:{width:"38%"}},[t._v(t._s(t.respData.id))]),t._v(" "),s("th",{attrs:{width:"12%"}},[t._v("区块高度")]),t._v(" "),s("td",[s("router-link",{staticClass:"hashLink",attrs:{to:"/block/"+t.respData.height}},[t._v(t._s(t.respData.height))])],1)]),t._v(" "),s("tr",[s("th",[t._v("时间")]),t._v(" "),s("td",[t._v(t._s(t._f("datetimeformat")(t.respData.timestamp,t.respData.timestamp)))]),t._v(" "),s("th",[t._v("大小")]),t._v(" "),s("td",[t._v(t._s(t.respData.size)+" Byte")])]),t._v(" "),s("tr",[s("th",[t._v("交易金额")]),t._v(" "),s("td",[t._v(t._s(t._f("toBtm")(t.respData.transaction_amount,t.respData.transaction_amount))+" BTM")]),t._v(" "),s("th",[t._v("费用")]),t._v(" "),s("td",[t._v(t._s(t._f("toBtm")(t.respData.fee,t.respData.fee))+" BTM")])]),t._v(" "),s("tr",[s("th",[t._v("挖矿")]),t._v(" "),s("td",[t._v(t._s(1===t.respData.coinbase?"挖矿":"/"))]),t._v(" "),s("th",[t._v("状态")]),t._v(" "),s("td",[t._v(t._s(!1===t.respData.status_fail?"成功":"失败"))])]),t._v(" "),s("tr",[s("th",[t._v("确认数")]),t._v(" "),s("td",[t._v(t._s(t.respData.confirmations))]),t._v(" "),s("th",[t._v("版本")]),t._v(" "),s("td",[t._v(t._s(t.respData.version))])])])]),t._v(" "),s("h2",{staticClass:"subTitle"},[t._v("交易列表")]),t._v(" "),s("Table",{attrs:{columns:t.txHead,data:t.respData.detail,"no-data-text":"小原正在努力加载数据中..."}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});