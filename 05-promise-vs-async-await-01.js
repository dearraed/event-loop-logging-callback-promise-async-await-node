function getQuote() {
    let quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit laborum.";
    return new Promise((resolve, reject) => {
        resolve(quote);
      });
    
  }


  function getQuote2() {
    let quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit laborum.";
    return quote;
  }

  function main() {
    getQuote().then((quote) => {
      console.log(`quote1 : ${quote}`);
    }).catch((error) => {
      console.error(`error1 : ${error}`);
    });
  }

  async function main2() {
    try {
      var quote = await getQuote();
      console.log(`quote2 : ${quote}`);
    } catch (error) {
       console.error(`error2 : ${error}`);
    }
  }

  main();
  main2();