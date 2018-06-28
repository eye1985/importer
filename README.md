# Importer

A simple javascript JS/CSS loader.

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
        // Your code here
    }).catch(error => {
        console.log("Failed loading files");
    });
```

## Options

By default:

- Loads the JS files async and defere, sequentially.
- CSS files are loaded async and results in an inline style tag.


Options coming soon.
