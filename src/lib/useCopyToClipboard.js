import { useEffect, useState } from "react";
import copyToClipboard from "./copyToClipboard";

const useCopyToClipboard = ({ text, successDuration }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyToClipboard = () => {
        const result = copyToClipboard(text);
        setIsCopied(result);
    };

    useEffect(() => {
        if (isCopied && successDuration) {
            const timer = setTimeout(() => {
                setIsCopied(false);
            }, successDuration);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isCopied, successDuration]);

    useEffect(() => {
        return () => setIsCopied(false);
     }, [text]);

    return { isCopied, onCopy: handleCopyToClipboard };
};

export default useCopyToClipboard;
