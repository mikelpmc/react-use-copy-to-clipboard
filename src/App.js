import React, { useState } from "react";
import { useCopyToClipboard } from "./lib";

function App() {
    const [copyText, setCopyText] = useState("Copy this text");
    const { isCopied, onCopy } = useCopyToClipboard({ text: copyText });

    const handleChange = (ev) => {
        setCopyText(ev.target.value);
    };

    return (
        <div>
            <h3>React hook copy to clipboard</h3>
            <input type="text" value={copyText} onChange={handleChange} />
            <p>Text is copied: <strong>{isCopied ? 'true' : 'false'}</strong></p>
            <div>
                <button type="button" onClick={onCopy}>
                    Copy to clipboard
                </button>
            </div>
        </div>
    );
}

export default App;
