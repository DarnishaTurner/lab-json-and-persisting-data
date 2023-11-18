const { generateRandomBookData, generateSingleBook } = require(`./dataGenerator`);
 

// The following is to test if each generated book has all the required fields
test(`Generated books contain required fields`, () => {
    const booksData = generateRandomBookData(7);
    booksData.forEach(book => {
        expect(book).toHaveProperty(`id`);
        expect(book).toHaveProperty(`bookTitle`);
        expect(book).toHaveProperty(`author`);
    });
});

//The following is to ensure that the datatypes of generated fields are as expected
test(`Check datatype of fields in generated books`, () => {
    const booksData = generateRandomBookData(7);
    booksData.forEach(book => {
        expect(typeof book.id).toBe(`string`);
        expect(typeof book.bookTitle).toBe(`string`);
        expect(typeof book.author).toBe(`string`);
    });
});

//The following is to be sure that creating a single item actually creates only one item
test(`Create single book generates only one book`, () => {
    const book = generateSingleBook();
    expect(Array.isArray(book)).toBe(false);
});

//The following is to check if the function to create multiple items generates the correct number of items
test(`Create multiple books generates correct number of books`, () => {
    const numberOfBooks = 7;
    const booksData = generateRandomBookData(numberOfBooks);
    expect(booksData.length).toBe(numberOfBooks);
});