$(document).ready(function() {

  var activeForm = document.querySelectorAll('#form');
  Array.prototype.forEach.call(activeForm, function(item) {
    $(item).submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			document.location = 'message.html';
			$("#form").trigger("reset");
		});
		return false;
	 });
  });    
});