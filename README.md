# redcap.js

simple, lightweight client module for REDCap

[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()


## Features

* **Easy to use** module-based api
* **Callback architecture** for easy integration
* **Standardized design** to provide consist look and feel across REDCap modules
* Integrate **multiple REDCap projects** into a single application

## Installation

    npm install redcap --save
   
## Getting Started

Here is a simple example of exporting (or reading) all the records in a project:

```javascript 1.6
const config = {
  host: 'someredcapserver.edu',
  path: '/apipath/'
};

const redcap = require ('redcap') (redcapToken, config);

redcap.records.export (function (err, res) {
  if (err) {
    // handle error
  }
  else {
    console.log (res);    
  }
};
```

## Next Steps

For more information on how redcap.js works and how you can implement it into your 
own project, check out the [wiki](https://github.com/iupui-software-innovation/redcap/wiki).

