## ⚛️ React copy to clipboard

React custom hook to copy the given text to the clipboard.

Compatible with Edge and IE11 as well all modern browsers.

[Codesandbox demo](https://codesandbox.io/s/react-use-copy-to-clipboard-dsoyn)

## How to use

### Basic usage
```jsx
function App() {
  const {isCopied, onCopy} = useCopyToClipboard({text: "Text to copy"});

  return (
    <button type="button" onClick={onCopy}>
      Text is copied: {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
  );
}
```

### Reset the isCopied success state after a given time

You can reset the ```isCopied``` flag passing an optional ```successDuration``` prop with the desired time in milliseconds.

```jsx
const {isCopied, onCopy} = useCopyToClipboard({text: "Text to copy", successDuration: 2000});
```

##### Author: Mikel Parra <mikelpmc@gmail.com> | <http://github.com/mikelpmc>
