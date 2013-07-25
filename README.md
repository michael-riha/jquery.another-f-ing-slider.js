AnotherFuckingSlider.js
==============
Another minimal costumizable jQuery slider.

[Fucking Examples & Demo](http://beyondthestatic.github.io/jquery.another-f-ing-slider.js)
----------------------------------------------------------------------------------

Usage
-----
Just link jquery.another-f-ing-slider.js on your html document and use HTML structure like bellow:

```html
<div class="slide-container">
	<div id="slide1">
		<p>Dies ist Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.</p>
	</div>
    <div id="slide2">
		<p>Dies ist Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.</p>
	</div>
	<div class="slide" id="slide3">
		<p>Dies ist Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen.</p>
	</div>
</div>
	
<ul id="afs-controls">
	<li data-slide-id="slide1">Slide1</li>
	<li data-slide-id="slide1">Slide2</li>
	<li data-slide-id="slide2">Slide3</li>
</ul>

<button id="afs-prev">Previous</button>
<button id="afs-next">Next</button>
```

Javascript:

```js
$('.slide-container').anotherFuckingSlider();
```

Settings
--------

Default settings:

```js
{  
    speed:          500,                //how long it takes to slide a fucking slide (in ms)
    controlsID:     'afs-controls',     //the id of the controls container
    nextID:         'afs-next',         //the id of the next button
    prevID:         'afs-prev',         //the if of the previous button
    autoRotate:     true,               //decide if the fucking slider should slide automatically
    rotateTime:     10000,              //the delay between automatic sliding (in ms)
    activeClass:    'active'            //the class that the active controls element becomes
}
```

[Fucking Examples & Demo](http://beyondthestatic.github.io/jquery.another-f-ing-slider.js).
