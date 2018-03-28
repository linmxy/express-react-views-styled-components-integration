const express = require('express');

const app = express();
app.set('views', __dirname + '/pages');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());

app.get('/', (req, res) => res.render('hello'));

app.listen(3999, () => console.log(`Server start at port 3999`));
