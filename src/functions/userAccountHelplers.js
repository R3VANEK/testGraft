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

export const changeSecondSection = (section) => {
    let previousBlock = document.querySelector('.second.active');
    let previousOption = document.querySelector('.first.active');

    if(!previousBlock.classList.contains(section)){
        let editData = document.querySelector('.second.EDIT_DATA');
        let deleteData = document.querySelector('.second.DELETE_ACCOUNT');
        let security = document.querySelector('.second.SECURITY');
        let actualOption = document.querySelector(`.first.${section}`);
        console.log(actualOption)
        actualOption.classList.add('active');

        previousOption.classList.remove('active')
        previousBlock.classList.remove('active');
        previousBlock.classList.add('none');

        switch(section){
            case 'EDIT_DATA':
                editData.classList.remove('none');
                editData.classList.add('active');
                return;
            case 'DELETE_ACCOUNT':               
                deleteData.classList.remove('none');
                deleteData.classList.add('active');
                return;
            case 'SECURITY':        
                security.classList.remove('none');
                security.classList.add('active');
                return;

            default: return;
        }
    }
}