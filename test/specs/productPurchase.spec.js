const searchActions = require("../pages/search/searchActions");
const addToCartActions=require("../pages/addToCart/addToCartActions");
const checkoutActions=require("../pages/checkout/checkoutActions");
const loginActions=require("../pages/login/loginActions")
const utilitiy = require("../pages/Utilites/utilitiy");
let productName = "";
let productQty;
var singleProductPrice;
describe("Demo evershop site automation", () => {
    it("Should able to search product", async () => {
        const number=await utilitiy.randomNumber(4,1);
        productName=await searchActions.selectedProduct(number);
        await searchActions.clickOnSearchIcon();
        await searchActions.enterSearchItemName(productName);
        await browser.keys('Enter');
    });
    it("Should able to add product into cart", async () => {
        await addToCartActions.clickOnproductFromList(productName);
        const number=await utilitiy.randomNumber(2,1);
        await addToCartActions.selectProductSize(number);
        await addToCartActions.selectColor();
        productQty=await utilitiy.randomNumber(10,1);
        await addToCartActions.enterProductQty(productQty);
        singleProductPrice= await addToCartActions.getSingleProductPrice();
        await addToCartActions.clickOnAddToCartButton();
        await addToCartActions.clickOnViewCartButton();
    });
    it("Should successfully verify total amount and grand total amount", async () => {
        //const singleProductPrice=await addToCartActions.getSingleProductPrice();
        const expectedTotalPrice=productQty*singleProductPrice;
        const actualSubTotal=await checkoutActions.getSubTotalAmout();
        const actualGrandTotal=await checkoutActions.getGrandTotalAmout();
        expect(expectedTotalPrice).toEqual(actualSubTotal);
        expect(expectedTotalPrice).toEqual(actualGrandTotal);
    });

    it.skip("Should able to successfully logout", async () => {
        await loginActions.clickOnProfileIcon();
        await loginActions.clickOnLogout();
        await browser.pause(5000);
    });
});
