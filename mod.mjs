
function stringToUint8Array(str) {
  const 
  encoder    = new TextEncoder(),
  uint8Array = encoder.encode(str);

  // console.log('[stringToUint8Array]', uint8Array);

  return uint8Array;
}

function base64ToUint8Array(base64String) {
  // Decode the Base64 string into a binary string
  const binaryString = atob(base64String);

  // Create a Uint8Array from the binary string
  const uint8Array = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }

  return uint8Array;
}

/**
 * Transforms a string into a base64.
 * @param {string} str 
 * @returns {string} 
 */
function stringToBase64(str) {
  const 
  uint8Array = stringToUint8Array(str),
  base64     = btoa(String.fromCharCode(...uint8Array));

  return base64;
}

/**
 * Transforms a base64 into a string.
 * @param {string} base64 
 * @returns {string} 
 */
function base64ToString(base64) {
  const
  uint8Array = base64ToUint8Array(base64),
  decoder    = new TextDecoder(),
  str        = decoder.decode(uint8Array);

  return str;
}

export {
  stringToBase64, base64ToString
};

