const {test,expect} = require('@playwright/test');
const {POManager} = require('../PageObjects/POManager');
const {customtest} = require('../TestData/Test-base');
const dataset =  JSON.parse(JSON.stringify(require("../TestData/TestData.json")));


// test('sampleTest', ()=>{
//       console.log(dataset.username);
// })
test.only('Login Test', async ({page}) => {
       const pomanager = new POManager(page);
       const loginpage = pomanager.getLoginPage();
       const searchpage = pomanager.getSearchPage();
      await loginpage.goTo();
      await loginpage.clkLoginBtn();
      await loginpage.enterLoginEmail(dataset.username);
      await loginpage.enterLoginPassword(dataset.password);
      await loginpage.clkSignInBtn();
      await page.waitForLoadState('networkidle');
      const msg=await loginpage.getWelcomeMsg();
      const splitmsg= await msg.split("My")
      console.log(splitmsg);
      console.log(splitmsg[0]);
      await searchpage.enterSearchTerm('Rings');
      console.log(await searchpage.getTotalproductCount());
      await searchpage.clkFilterBtn();
      await searchpage.selectMinprice('15000');
      await searchpage.clkFilterBtn();
      await searchpage.selectMaxprice('25000');
      await searchpage.clksortByfilterBtn();
      
      console.log( await searchpage.productname.count());
      console.log( await searchpage.productprice.count());
      console.log( await searchpage.metalinfo.count());


});


  customtest(`Client App login `, async ({page,testDataForLogin}) => 
{

      for(let i=0;i<2;i++){
            console.log(testDataForLogin[i].username);
            console.log(testDataForLogin[i].password);
      }
      const pomanager = new POManager(page);
      const loginpage = pomanager.getLoginPage();
     await loginpage.goTo();
     await loginpage.clkLoginBtn();
     for( let i=0;i<2;i++){
      await loginpage.clearLoginemail();
      await loginpage.clearLoginPassword();
      await loginpage.enterLoginEmail(testDataForLogin[i].username);
      await loginpage.enterLoginPassword(testDataForLogin[i].password);
      await loginpage.clkSignInBtn();
      await page.waitForLoadState('networkidle');
      const errmsg=await loginpage.getErrorMsg();
      console.log(errmsg)
      console.log("USER LOGGED IN FAILED");
     }
    
    
    
})




//PC Jewellers
// Bixas1234@gmail.com
// Bixas_1234








//Vaibhav Jewellers
//tasowif511@rc3s.com
//Abcd@123



