import React from 'react'
import baba from '../../../images/baba.png';
import chlop from '../../../images/chlop.png';

const Kid =(props)=>{

    const gender = props.kid.gender === 'm' ? (
        <img src={chlop} alt="usuń" id={props.kid.id}/>
    ) : (
        <img src={baba} alt="usuń" id={props.kid.id}/>
    )

    return(
        <div className="user-member" key={props.kid.id}>

            <div className="flying-exit" >
                <img src={require(`../../../images/x.png`)} alt="usuń" id={props.kid.id}/>
            </div>

            <div className="user-member-img">
                <img src={require(`../../../images/${props.kid.img}`)} alt="zdjęcie_dziecka"/>
            </div>

            <div className="user-member-text">
                {props.kid.name}
            </div>

            <div className="user-member-text">
                {props.kid.age} lat
            </div>

            <div className="user-member-text-edit" id={props.kid.id}
             onClick={()=>{props.changeActualKid(props.kid.id); props.toggleKidDetails(true)}}>
                Edytuj dane
            </div>

            <div className="user-member-hover">

                <div className="flying-exit gender" >
                    {gender}
                </div>

                <div className="user-member-img">
                    <img src={require(`../../../images/${props.kid.img}`)} alt="zdjęcie_dziecka"/>
                </div>

                <div className="child-F-grid">

                    <div className="edit-child-text-and-img">
                        <img src={require(`../../../images/Resize.svg`)} alt="zmień_rozmiar"/><br/>
                        {props.kid.height}
                    </div>

                    <div className="edit-child-text-and-img">
                        <img src={require(`../../../images/Birthday.svg`)} alt=""/><br/>
                        {props.kid.age}
                    </div>

                    <div className="edit-child-text-and-img">
                        <img src={require(`../../../images/Shoe.svg`)} alt=""/><br/>
                        {props.kid.shoeSize}
                    </div>

                    <div className="edit-child-text-and-img">
                        <img src={require(`../../../images/color_palette.svg`)} alt=""/><br/>
                        {props.kid.favColor}
                    </div>

                </div>
                <div className="purple-line-text" id={props.kid.id}> {/* TUTAJ JEST BŁĄD */}
                    <div className="purple-line-text-first"
                    onClick={()=>{props.changeActualKid(props.kid.id); props.toggleKidDetails(true)}}
                    >Edytuj</div>
                    <div className="purple-line-text-second"
                    onClick={()=>{props.changeActualKid(props.kid.id); props.toggleDeleteKid(true)}}
                    >Usuń</div>
                </div>
            </div>
        </div>
    )
}
export default Kid