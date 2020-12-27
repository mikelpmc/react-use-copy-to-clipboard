const copyToClipboard = text => {
    return new Promise(async (resolve, reject) => {
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(text);
                resolve(true);
            } else {
                const el = document.createElement("textarea");
                el.value = text;
                document.body.appendChild(el);

                el.select();
                const result = document.execCommand("copy");
                document.body.removeChild(el);

                if (result) {
                    resolve(result);
                } else {
                    reject(result);
                }
            }
        } catch (error) {
            reject(error);
        }
    });
};

export default copyToClipboard;
