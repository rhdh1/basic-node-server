const express = require('express');
var cors = require('cors');
const app = express();

const domains = (process.env.DOMAINS || '').split(' ');
const corsOptions = {
  origin: domains,
  optionsSuccessStatus: 200,
};

console.log('corsOptions: ', corsOptions);

app.get('/colors', cors(corsOptions), (req, res) => {
  res.json([
    {
      'value': 'red'
    },
    {
      'value': 'green'
    },
    {
      'value': 'blue'
    }
  ]);
});

app.get('/fruits', cors(corsOptions), (req, res) => {
  res.json([
    {
      'type': 'apple',
      'colors': ['red', 'green']
    },
    {
      'type': 'banana',
      'colors': ['yellow']
    },
    {
      'type': 'blueberry',
      'colors': ['blue']
    }
  ]);
});

app.get('/gc1', cors(corsOptions), (req, res) => {
  res.json([
    {
      name: 'apple',
      related: ['red', 'green', 'fruit'],
      defaultImage: 'http://louisiana.kitchenandculture.com/sites/default/files/pictures/apples/braeburn-apple.jpg',
      defaultWidth: 100,
      defaultHeight: 100,
      activeImage: 'https://images.all-free-download.com/images/graphiclarge/green_apples_on_tree_193815.jpg',
      activeWidth: 100,
      activeHeight: 100,
      labelPosition: 'left'
    },
    {
      name: 'banana',
      related: ['yellow', 'fruit'],
      defaultImage: 'https://www.abtvegetables.com/wp-content/uploads/2017/05/banana-600x600.jpg',
      defaultWidth: 100,
      defaultHeight: 100,
      activeImage: 'http://1.bp.blogspot.com/-raga2ntcSig/UGCJMMj9TPI/AAAAAAAABMg/pObHyV3WFPU/s1600/banana_ripening_chart.jpeg',
      activeWidth: 100,
      activeHeight: 100,
      labelPosition: 'TOP'
    },
    {
      name: 'blueberry',
      related: ['blue', 'fruit'],
      defaultImage: 'https://www.tampabaytan.com/wp-content/uploads/2014/10/Blueberry-Extract.jpg',
      defaultWidth: 100,
      defaultHeight: 100,
      activeImage: 'https://i.pinimg.com/originals/89/80/54/898054af54e2413bf7d22962c506fa10.jpg',
      activeWidth: 100,
      activeHeight: 100,
      labelPosition: 'none'
    }
  ]);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

