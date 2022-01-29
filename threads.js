process.env.UV_THREADPOOL_SIZE = 16;
const crypto = require("crypto");


const iterationTime = 32;

const start = Date.now();
const makeEncryption = () => crypto.pbkdf2('test', 'test', 100_000, 512, 'sha512', (err) => {
  const end = Date.now();
  if (err) {
    console.log("Error occured: ", err);
    return;
  }
  console.log(`Duration ${start - end}`);
});

for (let i = 0; i < iterationTime; i++) {
  makeEncryption();
} 