# Base64 conversions

A JavaScript library for converting to/from [base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64).

## Usage example

<details data-mdrb>
<summary>Convert string to/from base64:</summary>

<pre>
description = '''

'''
</pre>
</details>

```javascript
import {stringToBase64, base64ToString} from "https://esm.sh/gh/doga/base64@1.0.0/mod.mjs";

const
strIn  = 'hello',
base64 = stringToBase64(strIn),
strOut = base64ToString(base64);

console.info(`strIn: "${strIn}", base64: "${base64}", strOut: "${strOut}"`);
```

Sample output for the code above:

```text
strIn: "hello", base64: "aGVsbG8=", strOut: "hello"
```

### Run the usage example

Run the example above by typing this in your terminal (requires [Deno](https://deno.com/) 2+):

```shell
deno run --allow-net --allow-run --allow-env --allow-read jsr:@andrewbrey/mdrb@3.0.4 --dax=false --mode=isolated https://raw.githubusercontent.com/doga/base64/refs/heads/main/README.md
```

∎
