I have handed the wast-loader package over to @xtuc

Find the latest source here https://github.com/xtuc/webassemblyjs/tree/master/packages/wast-loader

---

Webpack loader for loading WebAssembly s-expressions from .wat or .wast files

The loader returns the compiled .wasm as a Buffer that can passed to 
WebAssembly.compile() or WebAssembly.instantiate()

## Install

    npm install --save-dev wast-loader

## Usage

In webpack.config.js

```javascript
module: {
    rules: [
        { test: /\.was?t$/, loader: "wast-loader", exclude: /node_modules/ }
    ]
}
```
      
Now you can write a .wat file such as

```lisp
;; exports function square() that multiplies the input number with itself
(module
    (func (export "square") (param $i i32) (result i32)
        get_local $i
        get_local $i
        i32.mul
    )
)
```

And use it with

```javascript
import square from "./square.wat";
    
WebAssembly.instantiate(square)
    .then(result => {
        let squared = result.instance.exports.square(2);
        console.log("2 squared is", squared);
    });
```

## More Examples

See also https://github.com/rhmoller/wasm-by-hand
