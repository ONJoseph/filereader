// Import the 'fs' (File System) module
const fs = require('fs');

// Specify the path to the text file you want to read
const filePath = './textfile.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Print the file contents to the console
  console.log(data);
});

/*
Documentation: 
=======================================
Node.js script that reads the contents of a text file asynchronously using the built-in 'fs' (File System) module. Let's break down the code step by step:

Import the 'fs' Module:

const fs = require('fs');
The 'fs' module is a core module in Node.js used to interact with the file system, allowing you to read and write files.
Specify the File Path:

const filePath = './textfile.txt';
The filePath variable stores the path to the text file that you want to read. In this case, it's set to './textfile.txt', which assumes that the text file is located in the same directory as the Node.js script.
Read the File Asynchronously:

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Print the file contents to the console
  console.log(data);
});
The fs.readFile method is used to read the file asynchronously. It takes three arguments:

filePath: The path to the file you want to read.
'utf8': The encoding of the file. 'utf8' is commonly used for text files, as it interprets the file contents as Unicode characters.
A callback function: This function will be called once the file reading operation is completed. It takes two parameters: err (an error object) and data (the file contents).
Inside the callback function:

If an error occurs during the file reading operation, the code logs an error message to the console, including the specific error (err).
If the file is successfully read, the data variable contains the contents of the file.
The file contents are printed to the console using console.log(data).
In summary, this code asynchronously reads the contents of the specified text file (textfile.txt) using the 'fs' module. If there is an error during the file reading process, it logs the error message. Otherwise, it prints the contents of the file to the console. This is a common pattern for reading files in Node.js, especially for large files or when reading files in a non-blocking manner.

Note:
Reading a file asynchronously means that the file is read in a non-blocking manner. In programming, when an operation is performed 
asynchronously, it doesn't block the execution of the rest of the program. Instead, the program continues to execute other tasks or 
operations while waiting for the asynchronous operation (in this case, file reading) to complete.

In the context of the code you provided, when you read a file asynchronously using the fs.readFile function, here's what happens:

The program initiates a request to read the file, and then it continues to execute the subsequent code without waiting for the file reading to finish.

Meanwhile, Node.js manages the file reading operation separately in the background.

When the file reading operation is complete, Node.js triggers the callback function you provided ((err, data) => { ... }).

Inside the callback function, you can access the contents of the file (data) or handle any errors that might have occurred (err).

Asynchronous file operations are particularly useful when dealing with potentially time-consuming tasks, such as reading large files or performing network operations, as they allow your program to remain responsive and continue executing other tasks while waiting for the asynchronous operation to complete. This is essential in applications where you don't want the entire program to be blocked while waiting for I/O (input/output) operations to finish.

*/