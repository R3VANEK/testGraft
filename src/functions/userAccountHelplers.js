export const toggleSettings = (show=true) => {

    let userSettings  = document.querySelector('.user-settings-wrapper');
        if(show){
            userSettings.classList.remove('none');
        } else {
            userSettings.classList.add('none');
        }

        toggleOverlayAndBlur();
}
export const toggleAddKid = (show=true) => {

    let addKid  = document.querySelector('.add-new-kid-wrapper');
        if(show){
            addKid.classList.remove('none');
        } else {
            addKid.classList.add('none');
        }

        toggleOverlayAndBlur();
}

export const toggleOverlayAndBlur = (show=true) => {
    let header = document.querySelector('header');
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');
    let overlay = document.querySelector('.overlay');
    
    if(show){
        overlay.classList.remove('none');
        overlay.classList.add('anim-fade-in-overlay');
        header.classList.add('blur');
        main.classList.add('blur');
        footer.classList.add('blur');
    } else {
        overlay.classList.add('reverse-anim-fade-in-overlay');
        header.classList.remove('blur');
        main.classList.remove('blur');
        footer.classList.remove('blur');

        setTimeout( () => {
            overlay.classList.add('none');
            overlay.classList.remove('anim-fade-in-overlay');
            overlay.classList.remove('reverse-anim-fade-in-overlay');
            
        }, 600)
    }
    
   
}

export const removeAll = () => {
    console.log("AAAA")
    toggleSettings(false);
    toggleAddKid(false);
    toggleOverlayAndBlur(false);
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