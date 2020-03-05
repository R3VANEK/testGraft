export const toggleSettings = (doAnimation = false) => {

    //if(doAnimation){ 
        let userSettings  = document.querySelector('.user-settings-wrapper');
        userSettings.classList.toggle('none');
      
        toggleOverlayAndBlur();
    //}
}

export const toggleOverlayAndBlur = () => {
    let header = document.querySelector('header')
    let main = document.querySelector('main')
    let footer = document.querySelector('footer')
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('none');
    header.classList.toggle('blur');
    main.classList.toggle('blur');
    footer.classList.toggle('blur');
}

export const removeAll = () => {
    let userSettings  = document.querySelector('.user-settings-wrapper');
    userSettings.classList.add('none');

    toggleOverlayAndBlur();
}