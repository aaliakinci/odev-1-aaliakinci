import getData from './lib/service'



let result = getData(2);

    result.then(function(output){
      console.log(output);
    });
 
