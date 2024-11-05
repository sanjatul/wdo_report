function convertToNumber(){
    const text="$7,18.00";
    const convertToSimpleText=parseFloat(text.replace(/[$,]/g,""));
    //const textToNumber=parseFloat(convertToSimpleText);
    console.log(convertToSimpleText);
    console.log(typeof convertToSimpleText);
}
convertToNumber();