const addToCartLocators=require("./addToCartLocators");
const utility=require("../Utilites/utilitiy")
class AddToCartActions{
    async clickOnproductFromList(productName){
         await addToCartLocators.productFromList(productName).click();
    }
    async selectProductSize(number){
        await addToCartLocators.productSize(number).click();
        await browser.pause(3000);
    }
    async selectColor(){
        await addToCartLocators.productColor.click();
        await browser.pause(3000);
    }
    async enterProductQty(qty){
        await addToCartLocators.inputQtyField.setValue(qty);
    }
    async clickOnAddToCartButton(){
        await addToCartLocators.buttonAddToCart.click();
        await browser.pause(4000);
    }
    async clickOnViewCartButton(){
        await addToCartLocators.buttonViewCartFromModal.click();
        await browser.pause(4000);
    }
    async getSingleProductPrice(){
        const productPrice= await addToCartLocators.priceFromProductPage.getText();
        const productPriceIntoNumber=await utility.convertTextToNumber(productPrice);
        return productPriceIntoNumber;
    }
}
module.exports=new AddToCartActions();