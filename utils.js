export  function randomIndex(currentIndex,currentPage,maxNumber) {
    console.log("randomImage clicked");
    let randomIndex;
    maxNumber *=2;
    do {
      randomIndex = Math.floor((Math.random() * (maxNumber - 1 - currentIndex))+currentIndex+1);
      console.log(randomIndex);
    }while(randomIndex===currentIndex)
    if((randomIndex < 5)&&(randomIndex>0)){
      currentPage = 0
      console.log(currentPage,"current page");
    }
    else{
      currentPage = 1;
      console.log(currentPage,"current page");

    }
    currentIndex = randomIndex;
    

    return {"newIndex":currentIndex,"newPage":currentPage};
  }