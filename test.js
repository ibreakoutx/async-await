var fs = require('fs');

async function readFile(filename, encoding) {
  return new Promise( (resolve,reject) =>{
    fs.readFile(filename, encoding, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  })
}

async function waitFunc() {
    return new Promise( (resolve,reject) => {
      setTimeout( ()=> resolve('*** DONE ***'), 2000 );
    });
}

async function wrapCall() {
  try {
    let result;
    //Cannot call await in a regular function or at top level standalone
    result = await readFile("file.txt","utf-8");
    console.log(result);

    result = await waitFunc();
    console.log(`2 seconds later: ${result}`);
  }
  catch(err) {
    console.log(err);
  }
}

wrapCall()
