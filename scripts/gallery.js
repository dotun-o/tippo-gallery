"use strict";

var Gallery = (function Gallery(galleryId)
{
	var obj = {
		currentIndex: 0,
		htmlTarget: "",
		container: document.createElement("div"),
		slides: [],
		add: function add()
		{
			this.slides = this.slides.concat(Array.from(arguments));
		},
		init: function display()
		{
            try
            {
                if(!this.htmlTarget)
                {
                    throw new Error("Error: HTML target not set.");
                }
            }
            catch(e)
            {
                return console.log(e.message);
            }
            
            for(var i = 0; i < this.slides.length; i++)
			{
				// run this once, at initialization,
                // to set up slide-to-div binding
                // which also sets up IDs (see Slide constructor)
                this.slides[i].bindToHtml();
			}
            
            this.htmlTarget.appendChild(this.container);
		},
        showSlide: function showSlide()
        {
            var currentSlide = this.slides[this.currentIndex].container;
            currentSlide.style.opacity = "0";
            this.container.innerHTML = "";
            this.container.appendChild(currentSlide);
            var t = setInterval(function(){
                currentSlide.style.opacity = parseFloat(currentSlide.style.opacity) + 0.1;
                if(currentSlide.style.opacity >= 1)
                {
                    currentSlide.style.opacity = 1;
                    clearInterval(t);
                }
            }, 50);
        },
        hideSlide: function hideSlide()
        {
            var currentSlide = this.slides[this.currentIndex].container;
            var t = setInterval(function(){
                currentSlide.style.opacity = parseFloat(currentSlide.style.opacity) - 0.1;
                if(currentSlide.style.opacity <= 0)
                {
                    currentSlide.style.opacity = 0;
                    clearInterval(t);
                }
            }, 50);
        },
        prevSlide: function prevSlide()
        {
            this.hideSlide();
            
            if(this.currentIndex === 0)
            {
                this.currentIndex = this.slides.length - 1;
            }
            else
            {
                this.currentIndex -= 1;
            }

            this.showSlide();
        },
        nextSlide: function nextSlide()
        {
            this.hideSlide();
            
            if(this.currentIndex === (this.slides.length - 1))
            {
                this.currentIndex = 0;
            }
            else
            {
                this.currentIndex += 1;
            }

            this.showSlide();
        }
	};

	obj.container.setAttribute("id", galleryId);

	return obj;
}("tippo-gallery"));