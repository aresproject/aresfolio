'use strict';
		
(function($){
			$(window).load(function(){
				$(".content").mCustomScrollbar({
					scrollButtons:{
						enable:true
					},
					callbacks:{
						onScroll:function(){ 
							$("."+this.attr("id")+"-pos").text(mcs.top);
						}
					}
				});
				$(".output a[rel~='about']").click(function(e){
					e.preventDefault();
					$(".content").mCustomScrollbar("scrollTo","#about");
					$(".content").mCustomScrollbar("scrollTo",$(this).attr("href"));
				});
				$(".output a[rel~='contact']").click(function(e){
					e.preventDefault();
					$(".content").mCustomScrollbar("scrollTo","#contact");
				});
				$(".output a[rel~='passion']").click(function(e){
					e.preventDefault();
					$(".right-content").mCustomScrollbar("scrollTo","#passion");
				});
				$(".output a[rel~='portfolio']").click(function(e){
					e.preventDefault();
					$(".right-content").mCustomScrollbar("scrollTo","#portfolio");
				});
				$(".output a[rel~='exp']").click(function(e){
					e.preventDefault();
					$(".right-content").mCustomScrollbar("scrollTo","#exp");
				});
				$(".output a[rel~='graph']").click(function(e){
					e.preventDefault();
					$(".right-content").mCustomScrollbar("scrollTo","#graph");
				});
			});
		})(jQuery);