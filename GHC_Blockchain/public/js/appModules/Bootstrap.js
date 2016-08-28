/**
 * http://usejsdoc.org/
 */

$.getScript("js/appModules/ListShopkeepersWidget.js");
var Bootstrap = (function(){
	var WIDGET_ID = "bootstrap";
	return{
		init:function(div){
			widgetDiv = $("#" +div);
			/*
			 * 
			 * Decide Whether to Load ListShopkeeprsWidget.js or ShopkeepersItemCatalogwidget.js
			 */
				ListShopkeepersWidget.init(widgetDiv);
			
		}
	};
})();