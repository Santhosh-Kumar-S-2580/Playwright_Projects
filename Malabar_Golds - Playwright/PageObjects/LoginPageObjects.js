class LoginPageObjects{

        constructor (page){

            this.page = page;
            this.LoginBtn=  page.locator("a.hidden-xs.hidden-sm.popuplogin.pull-right.head-links.login-popup-link");
            this.loginemail= page.frameLocator("#iframeLogin").locator('#userLoginEmail');  
            this.loginpassword = page.frameLocator("#iframeLogin").locator("#userLoginPassword");
            this.SignInBtn=  page.frameLocator("#iframeLogin").locator("#submit-login");
            this.welcomeMsg= page.locator("div.pos-rel.pull-right");
            this.errorMsg=page.frameLocator("#iframeLogin").locator("#common_login_message");
         
        }
    
    async goTo(){

        
       await this.page.goto("https://www.pcjeweller.com/");
   
    }
   
    async clkLoginBtn(){    
            
            await this.LoginBtn.nth(1).click();       
}
    async enterLoginEmail(email){
    
        await this.loginemail.type(email);
        console.log(await this.loginemail.textContent());
    }
    async enterLoginPassword(password){
        await this.loginpassword.type(password);
        // const pwd = ;
         console.log(await this.loginpassword.textContent());
    }
    async clkSignInBtn(){
        await this.SignInBtn.click();

    }
    async getWelcomeMsg(){

        return await this.welcomeMsg.textContent();
    }

    async getErrorMsg(){
        return await this.errorMsg.textContent();
    }
    async clearLoginemail(){
        await this.loginemail.clear();
    }
    async clearLoginPassword(){
        await this.loginpassword.clear();
    }

}
module.exports = {LoginPageObjects}