//variables to keep track of popup element states and window width changes
var popupVisible = false;
var aboutPopupVisisble = false;
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
//remove popout menu when screen width changes to avoid issues
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
    
    $('body').on('click', function(event){
        if (popupVisible == true){
        $('.link-wrapper-popup').remove();
        popupVisible = false;
        console.log(popupVisible);
        event.stopPropagation();
        }
    })
}

//handle get to know me button which generates more about me content on click
//removes about me content when on click when visible
function handleGetToKnowMe(){
    $('body').on('click', '.about-me', function(){
        if (aboutPopupVisisble === false){
        $('.about-me').after(`<p class="popup-p">In my personal life I enjoy:</p>
        <ul class="popup-ul">
        <li>Spending time with my wife & family</li>
        <li>Video games</li>
        <li>Music of all sorts</li>
        <li>Being outdoors</li>
        <li>My cat</li>
        </ul>
        `)
        aboutPopupVisisble = true;
        return;
        }

        if (aboutPopupVisisble === true){
            $('.popup-p').remove();
            $('.popup-ul').remove();
            aboutPopupVisisble = false;
        }
    })

}

//main function to run page
function handlePage(){
    removePopupIfWidthChanges();
    handleBurger();
    removePopupIfScreenClicked();
    handleGetToKnowMe();
}