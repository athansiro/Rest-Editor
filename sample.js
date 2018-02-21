$(document).ready(function() {
$("#fetchDataBtn").click(function(){
	var domain = $("#domain").val();
	var url = $("#url").val();
	var method = $("#method").val();
	var obj={};
	$( ".param" ).each(function() {
		 var getKey = $(this).val();
		 var getValue = $(this).parent().find("input.param2").val();
		 obj[getKey]=getValue;
	});
	
	$("#resultField").val("");
	alert(JSON.stringify(obj));
	/*$.ajax({
		url : domain+url,
		type : method,
		dataType : 'json',
		data : obj,
		error : function(xhr, status, error) {
			$("#resultField").val(xhr.responseText);
		},
		success : function(data) {
			try{
$("#resultField").val(JSON.stringify(data, undefined, 4));	
			}catch(e){
$("#resultField").val(JSON.stringify(data));
			}
			
		}
	});*/
});

$("#addParam").click(function(){
	var conArr = [];
	conArr.push('<div class="input-group" style="margin-top: 5px;">  ');
	conArr.push('<input type="text" placeholder="key" class="controller3 param form-control"/>  ');
	conArr.push('<span class="input-group-addon  clabel">~</span> ');
	conArr.push(' <input type="text" placeholder="value"  class="controller3 param2 form-control"/>');
	conArr.push('<div/>  ');
	
	$(".paramCon").append(conArr.join(""));
	
});
			});