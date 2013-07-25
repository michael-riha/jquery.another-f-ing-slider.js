// jQuery Plugin AnotherFuckingSlider

(function($) {

    $.anotherFuckingSlider = function(element, options) {

        var defaults = {
        	speed: 500,
            controlsID: 'afs-controls',
            nextID: 'afs-next',
            prevID: 'afs-prev',
            autoRotate: true,
            rotateTime: 10000,
            activeClass: 'active'
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {
        	//merge the settings
            plugin.settings = $.extend({
				active: 0, 
				maxIndex: ($element.children().length - 1),
				width: $element.width()
			}, defaults, options);
            
            //set the needed css
            setCSS();
            positionSlides();
            
            //bind the controls
            $('#' + plugin.settings.controlsID).children().click(handleControls);
            $('#' + plugin.settings.nextID).click(plugin.nextSlide);
            $('#' + plugin.settings.prevID).click(plugin.prevSlide);
            
            //initialize auto rotation if wanted
            if(plugin.settings.autoRotate) {
            	initRotation();
            }
            
            //show first slide
            plugin.showSlide(0);
        }
		
		/*
		 * This function shows the slide with the given index (0-based)
		 */
        plugin.showSlide = function(index) {
        	plugin.settings.active = index;
            $element.animate({
            	'left': -(plugin.settings.width * index) + 'px'
            }, plugin.settings.speed);
            
            //set the active controls element
            $('#' + plugin.settings.controlsID).children().removeClass(plugin.settings.activeClass);
            $('#' + plugin.settings.controlsID).children(':nth-child(' + (index + 1) + ')').addClass(plugin.settings.activeClass);
        }
        
        /*
		 * This function shows the next slide
		 */
        plugin.nextSlide = function() {
        	plugin.settings.active++;
        	
        	if(plugin.settings.active > plugin.settings.maxIndex)
        		plugin.settings.active = 0;
        	
        	plugin.showSlide(plugin.settings.active);
        }
        
        /*
		 * This function shows the previous slide
		 */
        plugin.prevSlide = function() {
        	plugin.settings.active--;
        	
        	if(plugin.settings.active < 0)
        		plugin.settings.active = plugin.settings.maxIndex;
        	
        	plugin.showSlide(plugin.settings.active);
        }
		
		/*
		 * Set all needed css parameters for the slides and the containers
		 */
		var setCSS = function() {
			$element.css({
				'position': 'relative'
			});
			
            $element.find('.slide').css({
				'position': 'absolute',
				'width': plugin.settings.width + 'px'
			});
			
			$element.parent().css({
				'overflow': 'hidden'
			});
        }
		
		/*
		 * Set the position of each slide so they are next to each other
		 */
        var positionSlides = function() {
            $element.find('.slide').each(function(i) {
            	$(this).css({
            		'left': (plugin.settings.width * i) + 'px'
            	});
            });
        }
        
        /*
		 * If an control element is clicked, this function will show the linked slide
		 */
        var handleControls = function(e) {
        	var $el = $(this);
        	
        	//get the slide from the elements data-slide-id attribute
        	var $slide = $('#' + $el.data('slideId'));
        	
        	//get the index of the slide
        	var index = $element.children().index($slide);
        	
        	plugin.showSlide(index);
        }
        
        var initRotation = function(e) {
        	//register an interval to rotate the slides
			plugin.settings.interval = window.setInterval(plugin.nextSlide, plugin.settings.rotateTime);
			
			//if the user hovers the container of the slides ...
			$element.mouseenter(function() {
				//... clear the interval so the slides no longer rotate
				plugin.settings.interval = window.clearInterval(plugin.settings.interval);
				
				//when the mouse leaves the container ...
				$(this).mouseleave(function() {
					//... register the interval again, but only if there is no interval registered at the moment
					if(typeof plugin.settings.interval == 'undefined') //need this check because of multiple mouseleave events
						plugin.settings.interval = window.setInterval(plugin.nextSlide, plugin.settings.rotateTime);
				});
			});
        }

        plugin.init();
    }

    $.fn.anotherFuckingSlider = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('anotherFuckingSlider')) {
                var plugin = new $.anotherFuckingSlider(this, options);
                $(this).data('anotherFuckingSlider', plugin);
            }
        });

    }

})(jQuery);