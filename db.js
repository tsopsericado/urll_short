let mongoose =  require('moogoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

console.log(mongoose.
    connection.readyState)

module.exports = mongoose









eoueei1ZOLnX6FKK;
ricardotsopse;