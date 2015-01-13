jQuery(document).ready(function(){
	$('[code-content]').each(function(){
		var code=$(this);
		var content=code.attr('code-content');
		if(content)code.html('<code>'+$(content).html().replace(/\n(\s)*/g, '\n').replace(/^(\n)*|(\n)*$/g, '')+'</code>');
	});
});