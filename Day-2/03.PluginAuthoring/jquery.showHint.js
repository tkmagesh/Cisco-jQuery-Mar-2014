$.fn.extend({
			showHint : function(){
				this.each(function(index,node){
					$(node).bind({
						focus : function(){
							var $this = $(this),
								hintText = $this.attr("data-hint-text");
							if ($this.val() === hintText){
								$this.val('').removeClass("hint");
							}

						},
						blur :function(){
							var $this = $(this),
								hintText = $this.attr("data-hint-text");
							if ($this.val() === ''){
								$this.val(hintText).addClass("hint");
							}

						}
					});
					$(node).trigger('blur');
				});
			}
		});