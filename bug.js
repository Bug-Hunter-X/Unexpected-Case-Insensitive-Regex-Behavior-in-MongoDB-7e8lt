```javascript
const query = { name: /pattern/i }; // Case-insensitive regex

db.collection('myCollection').find(query).toArray((err, docs) => {
  if (err) throw err; 
  console.log(docs);
});
```