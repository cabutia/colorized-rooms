# Colorized rooms challenge

## Setup and execution

In order to execute this simple script, you just have to run the following command:

```shell
node main.js
```

## File explanation

There are only three files in this project:

- __main.js__: The project entry point. This is the file you have to run with the node binary.
- __input.js__: This file contains the room layouts as an array of raw strings. This is the source we're going to parse into a colorized layout.
- __helpers.js__: This is the file that contains the helper functions, such as methods to determine which room we're in, which kind of cell we're processing, the colors, etc.