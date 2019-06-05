# Importer

A simple javascript JS/CSS loader.

## Included polyfill

- promise-polyfill
- whatwg-fetch

## Installation

```javascript
    // Without polyfill
    // 1kb
    <script src="dist/importer.min.js" />

    // With polyfill
    // 12kb
    <script src="dist/importer.polyfill.min.js" />
```


## Usage

```javascript
    importer([
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css'
    ]).then(function(){
        console.log("Ok iam all done");
        // Your code here
    }).catch(function(error) {
        console.log("Failed loading files");
    });
```

## Options

By default:

- Loads the JS files async and defere, sequentially.
- CSS files are loaded async and results in an inline style tag.


### useScriptType

Default: false

This will set the "text/javascript" in the script tag.

Example:
```javascript
    importer([
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js?version1.0', //Support params
        'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css'
    ],{
        useScriptType : true
    }).then(function(){
        console.log("Ok iam all done");
        // Your code here
    }).catch(function(error) {
        console.log("Failed loading files");
    });
```
