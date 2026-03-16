# opendata-qa
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project provides a simple framework to create and publish open data Q&A content in Markdown format, which can be converted to JSON and HTML.

## Features
- Converts Markdown Q&A format to JSON and HTML
- Provides a simple framework to create and publish open data Q&A content

## Requirements
- Deno runtime

## Usage
1. Create a Markdown file with Q&A content in the format:
```
## Question 1
Answer 1

## Question 2 
Answer 2
```
2. Run the `make.js` script to convert the Markdown to JSON and HTML:
```
deno run make.js
```
3. The script will generate a `.csv` and `.html` file from the input Markdown.

## Data / API
This project does not use any external data or APIs.

## License
This project is licensed under the [MIT License](LICENSE).
