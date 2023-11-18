const fs = require( "fs");

// The following function is intended to write data to a JSON file
function writeToJSONFile(data){
    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile("books.json", jsonData, (err) => {
        if(err) {
            console.error("Error writing to file:", err);
        }
    });
}

// The following function is intended to have the abil]ity to read data from a JSON file
function readFromJSONFile() {
    try {
        const data = fs.readFileSync("books.json", "utf8");
        return JSON.parse(data);
    }   catch (err) {
        console.error("Error reading from file:", err);
        return [];
    }   
}

module.exports = {
    writeToJSONFile,
    readFromJSONFile,
};