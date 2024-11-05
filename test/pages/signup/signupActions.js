const signupLocators=require("./signupLocators");
class SignupActions{

    async enterFulName(name){
        await signupLocators.fullNameInput.setValue(name);
    }
    async clickOnCreateAccount(){
        await signupLocators.createAccountLink.click();
    }
}
module.exports=new SignupActions();