// ytp-skip-ad-button

setInterval(function(){
    const skipButton=document.getElementsByClassName("ytp-skip-ad-button");
    if(skipButton !=undefined && skipButton.length > 0 ){
        console.log("ad detected")
        skipButton[0].click()

    }
},3000)