const checkoutLocators=require("./checkoutLocators")
const utility=require("../Utilites/utilitiy")
class CheckoutActions{
    async getSubTotalAmout(){
        const subTotal=await checkoutLocators.subTotal.getText();
        const subTotalInNumber=await utility.convertTextToNumber(subTotal);
        return subTotalInNumber;
    }
    async getGrandTotalAmout(){
        const grandTotal=await checkoutLocators.grandTotal.getText();
        const grandTotalInNumber=await utility.convertTextToNumber(grandTotal);
        return grandTotalInNumber;
        
    }
    async clickOnCheckoutButton(){
        await checkoutLocators.checkoutoutButton.click();
    }
}
module.exports=new CheckoutActions();