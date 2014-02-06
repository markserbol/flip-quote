# jQuery Flip-Quote
jQuery Flip-Quote creates a **pull-quote** from a text quote found in the document and *flips* to reveal the quote once it's scrolled into view. It also has a click feature that scrolls into and highlights the quote origin on the document.

[![jQuery Flip-Quote](http://i.imgur.com/GGUWZIl.png "jQuery Flip-Quote")](https://github.com/markserbol/urlive)

## Demo
[View the Demo Page](http://markserbol.github.io/flip-quote/)


## Basic Usage

Include the latest version of jQuery together with `jquery.flip-quote.css` and `jquery.flip-quote.js` in your document's *head*.


````html
<link href="jquery.flip-quote.css" rel="stylesheet"/>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="jquery.flip-quote.js"></script>
````

HTML Structure:
````html
<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <q id="quote">Maecenas rhoncus sapien massa, aliquam ornare justo tristique vitae</q>. Duis sollicitudin nulla a leo sagittis, tristique imperdiet turpis sollicitudin.</p>
  
  <div id="container">...</div>
</div>
````

Apply jQuery Flip-Quote by calling `flipQuote`:
````javascript
$('#quote').flipQuote({
  container: '#container'
});
````
To learn more go to this page : [http://markserbol.github.io/flip-quote/](http://markserbol.github.io/flip-quote/)

## Compatibility
Tested on all modern browsers – Chrome, Firefox, Safari.
Fallback provided for IE and older browsers.


## License
jQuery Flip-Quote is under [MIT License](http://opensource.org/licenses/MIT).

Detailed usage can be found at [http://markserbol.github.io/flip-quote/](http://markserbol.github.io/flip-quote/). You can also contact me via email found on my [Github Profile](https://github.com/markserbol/) or follow me on [Twitter](http://twitter.com/intent/user?screen_name=mark_serbol).
