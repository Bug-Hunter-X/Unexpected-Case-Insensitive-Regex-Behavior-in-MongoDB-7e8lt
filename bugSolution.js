```javascript
const query = { name: { $regex: 'pattern', $options: 'i' } }; //Proper way to use case insensitive regex

db.collection('myCollection').find(query).toArray((err, docs) => {
  if (err) throw err; 
  console.log(docs);
});
```