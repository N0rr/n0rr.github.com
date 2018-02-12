$(document).ready(function() {
	$.each( a, function(i, val ) {
		var option = document.createElement('option');
	    option.innerHTML = val.name;
	    option.value = val.name;
	    option.setAttribute("data-models",val.models);
	    $(".mark-select").append(option);
	});
	$(".mark-select").select2();
	$(".model-select").select2();
	$(".mark-select").change(function() {
		var at = $(this).find(':selected').attr('data-models').split(',');
		$(".model-select option").remove();
		$.each( at, function(i, val ) { 
			var option = document.createElement('option');
		    option.innerHTML = val;
		    option.value = val;
		    $(".model-select").append(option);
			
		});
		// 	var option = document.createElement('option');
		//     option.innerHTML = val.name;
		//     option.value = val.name;
		//     option.setAttribute("data-models",val.models);
		//     $(".mark-select").append(option);
		// });
	});
});