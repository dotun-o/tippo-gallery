"use strict";

// Shorthand function for document.getElementById
function getId(id)
{
	return document.getElementById(id);
}

window.addEventListener("DOMContentLoaded", main, false);

function main()
{
	
    loadSlides("data/tippo-gallery.json");

    /*Gallery.add(new Slide({name: "1. Tippo", image: "images/test.jpg", description: "Tippo is a smart tortoise who lives in the Fengoa Forest."}));
	Gallery.add(new Slide({name: "2. Cabo", image: "images/test.jpg", description: "Cabo is Tippo's crocodile friend."}));
	Gallery.add(new Slide({name: "3. Wompom", image: "images/test.jpg", description: "Wompom is Tippo's warthog friend."}));
    Gallery.add(new Slide({name: "4. Tippo", image: "images/test.jpg", description: "Tippo is a smart tortoise who lives in the Fengoa Forest."}));
	Gallery.add(new Slide({name: "5. Cabo", image: "images/test.jpg", description: "Cabo is Tippo's crocodile friend."}));*/

	Gallery.htmlTarget = getId("gallery-target");
	Gallery.init();
    setInterval(function(){Gallery.nextSlide();}, 3000);
}

function loadSlides(url)
{
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", loadData, false);

    function loadData()
    {
        if(xhr.readyState === 4 && xhr.status === 200)
        {
            var data = JSON.parse(xhr.response);
            for(var i = 0; i < data.length; i++)
            {
                Gallery.add(new Slide(data[i]));
            }

            // show first slide
            Gallery.showSlide();
        }
    }

    xhr.open("GET", url, true);
    xhr.send();
}