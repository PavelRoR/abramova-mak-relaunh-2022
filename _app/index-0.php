<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
	$(document).ready(function(){
		var wd = $(window),
			bd = $('body');
		function bWidth(){
			if (bd.width()>960){
				bd.load('1.php');
			}
			else if (bd.width()>608){
				bd.load('2.php');
			}
			else {
				bd.load('3.php');
			}
		}
		bWidth();
		wd.resize(bWidth);
	});
</script>
</body>
</html>