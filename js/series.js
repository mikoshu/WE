!function($) {
	$(document).ready(function(){
		var $img = $(".ac-img"),
			$box = $(".ac-box")
		$img.on("click",function(e){
			$(this).next().toggle()
			.parent().siblings(".goods-list-box")
			.find(".ac-box").css("display","none");
			
		})
	})
}(jQuery)