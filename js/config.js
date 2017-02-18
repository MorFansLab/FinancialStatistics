$(document).ready(function(){
	// $(".mydetail").html('<i class="icon icon-spin icon-spinner"></i>加载中..');
	// $(".detail").html('<i class="icon icon-spin icon-spinner"></i>加载中..');
	
	$.getJSON("./data.json",function(data){
		var $table = $(".donate");
		var $strHtml = "";
		var money = "0.00";
		$table.empty();
		$.each(data,function(infoIndex,info){
			money = FloatAdd(money,parseFloat(info["money"]));
			$strHtml += "<tr>";
			$strHtml += "<td>"+infoIndex+"</td>";
			$strHtml += "<td>"+info["name"]+"</td>";
			$strHtml += "<td>￥"+info["money"]+"</td>";
			$strHtml += "<td>"+info["time"]+" / "+info["way"]+"</td>";
      $strHtml += "</tr>";
		})
		$table.html($strHtml);
		$(".sum").html(money);
		$('table.datatable').datatable();
		new $.zui.Messager('收到总赞助：￥'+money+'', {
    type: 'success' // 定义颜色主题
}).show();
	})

$.getJSON("./mydata.json",function(data){
		var $mytable = $(".mydetail");

		var $mystrHtml = "";
		var mymoney = "0.00";
		$mytable.empty();
		$.each(data,function(infoIndex,info){
			mymoney = FloatAdd(mymoney,parseFloat(info["money"]));
			$mystrHtml += "<tr>";
			$mystrHtml += "<td>"+infoIndex+"</td>";
			$mystrHtml += "<td>"+info["way"]+"</td>";
			$mystrHtml += "<td>￥"+info["money"]+"</td>";
			$mystrHtml += "<td>"+info["time"]+"</td>";
      $mystrHtml += "</tr>";
		})
		$mytable.html($mystrHtml);
		$(".mysum").html(mymoney);
		new $.zui.Messager('支出总费用：￥'+mymoney+'', {
    type: 'success' // 定义颜色主题
}).show();
	});
	new $.zui.Messager('感谢所有赞助我们的小伙伴们！', {
		icon: 'heart',
    type: 'primary', // 定义颜色主题
		time: 0
}).show();






});




Media = document.getElementById("video"); 
Media.addEventListener('ended',function(){
	$(".myvideo").css('filter','blur(90px)');
	$(".myvideo").css('-webkit-filter','blur(90px)');
	$(".tip").html('<p id="content">QQ:2685618862</p>');
});
Media.addEventListener('play',function(){
	$(".myvideo").css('filter','blur(0px)');
	$(".myvideo").css('-webkit-filter','blur(0px)');
	$(".tip").html('');
});



function FloatAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    return (arg1*m+arg2*m)/m;
}

