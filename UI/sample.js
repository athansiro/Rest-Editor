/****
 Developer: Awungshi
 Purpose: Sample, for code reference
 Date: 2018-02-21
 ****/

$(document).ready(function() {

	/***click event to get the params and post it to REST server**/
	$("#fetchDataBtn").unbind("click").click(function(){
		var domain = $("#domain").val(); //GET DOMAIN;
		var url = $("#url").val(); //GET URL;
		var method = $("#method").val(); //GET METHOD;

		//LOGIC TO GET VALUE AND MAKE KEY - VALUE ;
		var obj={};
		$( ".param" ).each(function() {
			 var getKey = $(this).val();
			 var getValue = $(this).parent().find("input.param2").val();
			 obj[getKey]=getValue;
		});

		//VIEW PARAMETERS
		$("#resultField").val(JSON.stringify(obj));

		// USING AJAX POST DATA TO BACK-END USING THE REST API --
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