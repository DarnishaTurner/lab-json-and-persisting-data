const readline = require(`readline`);
const {generateRandomBookData} = require(`./dataGenerator`);
const {writeToJSONFile, readFromJSONFile} = require(`./fileHandler`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//The following funtions purpose is to ask the user for the number of books to generate
function askUserForBookCount() {
  return new Promise((resolve) => {
    rl.question("Enter the number of books to generate: ", (input) => {
      const count = parseInt(input);
      if (!isNaN(count)) {
        resolve(count);
      } else {
        console.log("Invalid input. Please enter a number.");
        resolve(0);
      }
    });
  });
}

//The following will be the main function thats purpose is to handle the users input and generate the book data
async function handleUserInput() {
  const bookCount = await askUserForBookCount();

  if (bookCount > 0) {
    const booksData = generateRandomBookData(bookCount);
    writeToJSONFile(booksData);
    console.log(`Generated ${bookCount} books and added to books and added to books.json`);
  } else {
    console.log(`No books generated.`);
  }

  rl.close();
}

// Below is a new function that would be considered the main function to start the process
async function start() {
  await handleUserInput();
  // The following is to be able to read from the JSON file after the data is generated
  const dataFromFile = readFromJSONFile();
  console.log(`Data from file:`, dataFromFile);
}
//Now below would be calling the main function to start the process
start();

// // Below would be considered me calling the main function
// handleUserInput();


// // The following is intended to generate the random book data
// const booksData = generateRandomBookData();

// // The following is intended to give the ability to write the generated data to the JSON file
// writeToJSONFile(booksData);

// //The following is intended to give the ability to read from the JSON file
// const dataFromFile = readFromJSONFile();
// console.log('Data from file:', dataFromFile);