const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
testDataForLogin :    [{
    username : "anshika@gmail.com",
    password : "Iamking@000"
    
    },
    {
        username : "ahika@gmail.com",
        password : "Iking@000"
        
    },
]
    

}

)