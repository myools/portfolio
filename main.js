var popupVisible = false;
var screenWidth = $(window).width();

//handle burger icon when clicked
//creates menu or removes menu
function handleBurger(){
   $(document).on('click', '#burger', function(){

        if (popupVisible === true){
            $('.link-wrapper-popup').remove();
            popupVisible = false;
            console.log(popupVisible);
            return;
        }
        if(popupVisible === false){
        $('nav').after(`<div class="link-wrapper-popup">
        <li><a href="#bio">BIO</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="https://github.com/myools">GITHUB</a></li>
        <li><a href="https://www.linkedin.com/in/zach-mueller-08595a197/">LINKEDIN</a></li>`);

        popupVisible = true;
        console.log(popupVisible);
        }
   })
}
//remove popout menu when screen width changes
function removePopupIfWidthChanges(){
    $(window).on('resize', function() {
        if ($(this).width() != screenWidth) {
            $('.link-wrapper-popup').remove();
            popupVisible = false;
        }
      });
}

//remove popout if screen is clicked
function removePopupIfScreenClicked(){
    
    $('body').on('click', function(){
        if (popupVisible == true){
        $('.link-wrapper-popup').remove();
        popupVisible = false;
        console.log(popupVisible);
        }
    })
}



function handlePage(){
    removePopupIfWidthChanges();
    handleBurger();
    removePopupIfScreenClicked();
}