# Caesar cipher CLI tool

**CLI tool that can encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**. The tool only works with English alphabet (both uppercase and lowercase), all other characters kept untouched.

## Installation

1. Download project from the repository.
2. Go into the newly created `caesar_cipher_cli` directory inside project, you’ll see the project files in there including `package.json`.
3. Install dependencies.
```bash
$ npm install
```
4. **Caesar cipher CLI tool** is ready for use.

## Usage

CLI tool accept 4 options (short alias and full name):

1.  **-a, --action**: an action  
An action only takes certain values: **encode** or **decode**. This option is required.
2.  **-s, --shift**: a shift  
Shift could be any integer, positive or negative. And means shift that will be used to encode/decode your message. This option is required.  
3.  **-i, --input**: an input file  
Path could be absolute or relative. Optional parameter.  
If input path wouldn\`t passed, the app will read input message from the command line.
4.  **-o, --output**: an output file  
Path could be absolute or relative. Optional parameter.  
If output path wouldn\`t passed, the app will write output message to the command line.

## Examples:

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node my_caesar_cli --action encode --shift 7 --input input.txt --output output.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`