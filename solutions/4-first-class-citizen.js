const run = (text) => {
    // BEGIN
    const takeLast = (text, len) => {
        if (text.length >= 4) {
            return text.split("").reverse().join("").slice(0, len);
        }
        return null;
    }
    // END
  
    return takeLast(text, 4);
  };
export default run;