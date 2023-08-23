const { LoginPageObjects } = require("./LoginPageObjects");
const { SearchPageObjects }= require("./SearchPageObjects");
class POManager{

    constructor(page){
        this.page = page;
        this.loginPage = new LoginPageObjects(this.page);
        this.searchPage= new SearchPageObjects(this.page);

    }

    getLoginPage(){
        return this.loginPage;
    }

    getSearchPage(){
        return this.searchPage;
    }
}
module.exports={POManager};