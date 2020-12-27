import { useEffect, useState } from "react";
import copyToClipboard from "./copyToClipboard";

const useCopyToClipboard = ({ text, successDuration = 2000 }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyToClipboard = async () => {
        try {
            await copyToClipboard(text);
            setIsCopied(true);
        } catch (error) {
            setIsCopied(false);
        }
    };

    useEffect(() => {
        if (isCopied) {
            const timer = setTimeout(() => {
                setIsCopied(false);
            }, successDuration);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isCopied, successDuration]);

    return { isCopied, onCopy: handleCopyToClipboard };
};

export default useCopyToClipboard;
