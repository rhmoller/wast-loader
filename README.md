Webpack loader for loading WebAssembly s-expressions from .wast files

The loader returns the compiled .wasm as a Buffer that can passed to 
WebAssembly.compile() or WebAssembly.instantiate()

## Install

    npm install --save-dev wast-loader

## Usage

In webpack.config.js

    module: {
        rules: [
            { test: /\.wast$/, loader: "wast-loader", exclude: /node_modules/ }
        ]
    }
      
Now you can write a .wast file such as

    ;; exports function square() that multiplies the input number with itself
    (module
        (func (export "square") (param $i i32) (result i32)
            get_local $i
            get_local $i
            i32.mul
        )
    )

And use it with

```javascript
import square from "./square.wast";
    
WebAssembly.instantiate(square)
    .then(result => {
        let squared = result.instance.exports.square(2);
        console.log("2 squared is", squared);
    });
```

## More Examples

See also https://github.com/rhmoller/wasm-by-hand
