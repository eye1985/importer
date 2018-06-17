#Importer.js

A simple javascript asset loader. 
Currently it only loads CSS and Javascript files.

## Dependencies 

This library will need two polyfills.

- Promise polyfill
- Fetch polyfill 


## Usage

```javascript
    importer([
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css'
    ]).then(function(){
        console.log("Ok iam all done");
        console.log($("#input").autocomplete)
    }).catch(error => {
        console.log("Failed loading css");
    });
```

## Options

By default:

- Loads the JS files async and defere.
- JS is loaded sequantially.
- CSS files are loaded async and results in an inline style tag.


Options coming soon.