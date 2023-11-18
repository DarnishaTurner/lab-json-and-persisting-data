const faker = require("faker");

//Below is a function that is intended to generate a unique ID.
function generateUniqueId() {
    return faker.datatype.uuid();
}

//Below is a function that is intended to generate some book data.
function generateBookData() {
    return {
        id: generateUniqueId(),
        bookTitle: faker.lorem.words(),
        author: faker.name.findName(),
        summary: faker.lorem.paragraph(),
        isFiction: faker.datatype.boolean(),
        discussionTopic: faker.lorem.words(),
        userComments: generateUserComments(),
        dataPublished: faker.date.past().toISOString(),
        numberOfComments: faker.datatype.number({ min: 0, max: 100}),
    };
}

// Below is a funtion that is intended to generate user comments for a book.
function generateUserComments() {
    const numberOfComments = faker.datatype.number({ min: 0, max: 10});
    const comments = [];

    for(let i = 0; i < numberOfComments; i++) {
        comments.push({
            userName: faker.internet.userName(),
            comment: faker.lorem.sentence(),
            date: faker.date.past().toISOString(),
        });
    }
    
    return comments;
}

// Below is a function intended to generate multiple books at a time.
function generateBooks(count) {
    const books = [];
    for(let i = 0; i < count; i++) {
        books.push(generateBookDate());
    }

    return books;
}

// Below is a function that is intended to generate and return random book data
function generateRandomBookData() {
    const numberOfBooks = 10;
    return generateBooks(numberOfBooks);
}

module.exports = {
    generateBooks,
    generateRandomBookData,
};