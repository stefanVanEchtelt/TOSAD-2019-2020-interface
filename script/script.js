//var rule_name = $("#form_rule_name");
initForm();

var rule = $("#form_rule");

rule.change(function(){
	initForm();

	switch(rule.val()){
		case "ARNG":
			$("#form_group_value").show();
			$("#form_group_value_extra").show();
			$("#form_group_operator_arng").show();
			break;
		case "ACMP":
			$("#form_group_operator").show();
			$("#form_group_value").show();
			break;
		case "ALIS":
			$("#form_group_list").show();
			break;
		case "TCMP":
			$("#form_group_column").show();
			$("#form_group_column2").show();	
			$("#form_group_operator").show();					
			break;
		case "ICMP":
			$("#form_group_table").show();
			$("#form_group_table2").show();
			$("#form_group_column").show();
			$("#form_group_column2").show();		
			$("#form_group_operator").show();				
	}
});

function initForm(){
	$("#form_group_operator").hide();
	$("#form_group_operator_arng").hide();
	$("#form_group_table").hide();
	$("#form_group_table2").hide();
	$("#form_group_column").hide();
	$("#form_group_column2").hide();	
	$("#form_group_compare").hide();
	$("#form_group_value").hide();
	$("#form_group_value_extra").hide();	
	$("#form_group_list").hide();
}