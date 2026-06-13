require('dotenv').config();
console.log("Key:",process.env.GOOGLE_GEMINI_KEY);
console.log("Length:",process.env.GOOGLE_GEMINI_KEY.length);

const app = require('./src/app')

app.listen(5000,()=>{
    console.log('server is running on http://localhost:5000')
})