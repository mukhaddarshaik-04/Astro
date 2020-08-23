module.exports= class AstroPage{
    get content(){return $("h1")}
    //get moreBtn(){return $("//button[.='more']") }

    contentCheck(){
        expect(this.content).toBeExisting;
		browser.pause(5000);
    }

  /**  moreBtnClick(){
        let flag=true;
        while(flag==true)
    {
        this.moreBtn.click();
		browser.pause(5000);
        flag=this.moreBtn.isDisplayed();
    }
    }*/


}



    