$(document).ready(function(){
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
		new $.zui.Messager('收到总赞助：￥'+money+'', {
    type: 'success'
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
    type: 'success'
}).show();
	});
	new $.zui.Messager('感谢所有赞助我们的小伙伴们！', {
		icon: 'heart',
    type: 'primary',
		time: 0
}).show();
});




function FloatAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2));
    return (arg1*m+arg2*m)/m;
}

