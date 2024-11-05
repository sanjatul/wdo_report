const signupActions=require("../pages/signup/signupActions")
const loginActions=require("../pages/login/loginActions")
const utilitiy = require("../pages/Utilites/utilitiy");
let email = "";
let password="";
let fullName="";
describe("Evershop login registration automation", () => {
    it("Should able to successfully register", async () => {
        fullName=await utilitiy.createRandomString(5);
        email=fullName+"@yopmail.com";
        password=fullName+"&*&*&*";
        await loginActions.clickOnProfileIcon();
        await signupActions.clickOnCreateAccount();
        await signupActions.enterFulName(fullName);
        await loginActions.enterEmail(email);
        await loginActions.enterPassword(password);
        await loginActions.clickOnSubmitButton();
        await browser.pause(5000);
    });
    it.skip("Should able to successfully logout", async () => {
        await loginActions.clickOnProfileIcon();
        await loginActions.clickOnLogout();
        await browser.pause(5000);
    });
    it.skip("Should able to successfully login", async () => {
        await loginActions.clickOnProfileIcon();
        await browser.pause(5000);
        await loginActions.enterEmail(email);
        await loginActions.enterPassword(password);
        await loginActions.clickOnSubmitButton();
    });
});
