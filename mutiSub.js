;

function tt_ubStr() {

	var nodes = document.querySelectorAll(".tt");

			var rows = "";//定义限制的行数
			var wordsLimit = "";//定义限制的字数
			var width = 0;//容器的宽度
			var fontSize = 0;//最终计算结果的字号大小
			var currentValues = "";//最终截取的字符串
			var wordArray = [];//存放字符串转化的数组
			var wordsNums = 0;//实际限制字体的数量


	// if(window.getComputedStyle(elem,null)){

	// alert("支持computedStyle");

	// }else if(window.currentStyle(elem)){

	// alert("支持currentStyle");

	// }

// 判断浏览器是否支持foreach
	if (nodes.forEach) {

		nodes.forEach(function(elem) {

			 rows = elem.getAttribute("tt-rows");
			 wordsLimit = elem.getAttribute("tt-words");
			 width = parseInt(window.getComputedStyle(elem, null) ? window.getComputedStyle(elem, null).getPropertyValue("width") : window.currentStyle(elem).getPropertyValue("width"));
			 values = elem.innerText.trim();
			 fontSize = parseInt(window.getComputedStyle(elem, null).getPropertyValue("font-size"));

			tt_subString(elem);

		});


	} else {


		for (var i = 0; i < nodes.length; i++) {


			var elem = nodes[i]

			rows = elem.getAttribute("tt-rows");
			 wordsLimit = elem.getAttribute("tt-words");
			 width = parseInt( window.getComputedStyle(elem, null).getPropertyValue("width"));
			 values = elem.innerText.trim();
			 fontSize = parseInt(window.getComputedStyle(elem, null).getPropertyValue("font-size"));
	
			tt_subString(elem);

		}

		alert("不支持foreach");

	}


// 截取字符串的方法
	function tt_subString(elem) {

		if (rows || wordsLimit) {

			elem.style.wordBreak = "break-all";
			elem.style.overflow = "hidden";

			if (rows) {

				wordsNums = (Math.ceil(width / fontSize)) * rows - 2;

			} else if (wordsLimit) {

				wordsNums = wordsLimit - 2;

			}


			for (var i = 0, len = values.length; i < len; i++) {

				wordArray[i] = values.substring(i, i + 1);

			}

			currentValues = wordArray.slice(0, wordsNums).join("") + "...";

			elem.innerText = currentValues;

		}
	}



}(window);

// var value = "sjd十分十分卡索拉卡林德洛夫卡萨啦啦快乐的空间覅我we开发技术库逻辑1的开房记录快速搭建法拉设计交底非叫我节疯狂·积分决赛见覅机的开房记录快速搭建法拉设计交底非叫我节疯狂·积分决赛见覅机的开房记录快速搭建法拉设计交底非叫我节疯狂·积分决赛见覅机的开房记录快速搭建法拉设计交底非叫我节疯狂·积分决赛见覅机的开房记录快速搭建法拉设计交底非叫我节疯狂·积分决赛见覅机"


window.onload = function() {

	tt_ubStr();
}