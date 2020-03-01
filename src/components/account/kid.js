import React from 'react'

const Kid =(props)=>{
    return(
        <div className="user-member" key={props.kid.id}>

            <div className="flying-exit" >
                <img src={require(`../../images/x.png`)} alt="usuń" id={props.kid.id}     
                onClick={ ()=>{props.handleClickEditProfile('deleteChild', props.kid.id)}}/>
            </div>

            <div className="user-member-img">
                <img src={require(`../../images/${props.kid.img}`)} alt="zdjęcie_dziecka"/>
            </div>

            <div className="user-member-text">
                {props.kid.name}
            </div>

            <div className="user-member-text">
                {props.kid.age} lat
            </div>

            <div className="user-member-text-edit" id={props.kid.id}>
                Edytuj dane
            </div>

            <div className="user-member-hover">

                <div className="flying-exit" >
                    <img src={require(`../../images/x.png`)} alt="usuń" id={props.kid.id}     
                    onClick={ (e)=>{props.handleClickEditProfile('deleteChild', e.target.id)}}/>
                </div>

                <div className="user-member-img">
                    <img src={require(`../../images/${props.kid.img}`)} alt="zdjęcie_dziecka"/>
                </div>

                <div className="child-F-grid">

                    <div className="edit-child-text">
                        <img src={require(`../../images/Resize.svg`)} alt="zmień_rozmiar"/><br/>
                        {props.kid.height}
                    </div>

                    <div className="edit-child-text">
                        <img src={require(`../../images/Birthday.svg`)} alt=""/><br/>
                        {props.kid.age}
                    </div>

                    <div className="edit-child-text">
                        <img src={require(`../../images/Shoe.svg`)} alt=""/><br/>
                        {props.kid.sizeOfShoe}
                    </div>

                    <div className="edit-child-text">
                        <img src={require(`../../images/color_palette.svg`)} alt=""/><br/>
                        {props.kid.favColor}
                    </div>

                </div>
                <div className="purple-line-text" id={props.kid.id} 
                onClick={(e)=>{props.handleClickEditProfile('editChild', props.kid.id)}}> {/* TUTAJ JEST BŁĄD */}
                    Edytuj dane
                </div>
            </div>
        </div>
    )
}
export default Kid