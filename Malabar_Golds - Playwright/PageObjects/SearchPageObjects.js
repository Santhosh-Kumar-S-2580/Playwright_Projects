class SearchPageObjects{

    constructor(page){
        this.page=page;
        this.searchtxtbox= page.locator("#searchKeyword");
        this.filterBtn=page.locator('button.btn.dropdown-toggle.text-overflow');
        this.selectMinPriceDD=page.locator("[name='priceDropMin']");
        this.selectMaxPriceDD=page.locator("[name='priceDropMax']");
        this.Totalproductcount=page.locator("#productsCount");
        this.sortByfilter=page.locator('#spcl_offers');
        this.productname=page.locator('h2.productTitle.h5style.font-medium.rmv-padding.text-overflow.margin-bottom');
        this.productprice=page.locator('span.price.font-medium ');
        this.metalinfo=page.locator('div.metal_info');
        this.wishlist=page.locator('div.AddwishLst');
    }

    async enterSearchTerm(productname){
        await this.searchtxtbox.fill(productname);
        await this.page.keyboard.press('Enter');
        

    }

    async getTotalproductCount(){
        console.log(await this.Totalproductcount.textContent());
    }

    async clkFilterBtn(){
        await this.filterBtn.nth(0).click();
    }

    async selectMinprice(minprice){
        await this.selectMinPriceDD.selectOption(minprice);
    }

    async selectMaxprice(manprice){
        await this.selectMaxPriceDD.selectOption(manprice);
    }

    async clksortByfilterBtn(){
        await this.filterBtn.nth(1).click();
        await this.sortByfilter.click();
    }

    
        
    
}

module.exports = {SearchPageObjects}