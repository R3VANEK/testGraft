import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editUser} from '../../../actions/authActions';
import PropTypes from 'prop-types';
import exit from '../../../images/x.png';
import boyAvatar from '../../../images/Boy Avatar.svg';
import plusCircle from '../../../images/plusCircle.svg';
import {removeAll} from '../../../functions/userAccountHelplers';
import './kids.min.css';


class KidDetails extends Component {

    state = {
        name: this.props.kid.name,
        height:this.props.kid.height,
        age:this.props.kid.age,
        shoeSize:this.props.kid.shoeSize,
        gender:this.props.kid.gender,
        color:this.props.kid.favColor
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    static propTypes = {
        editUser : PropTypes.func
    } 

     changeValueWithInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

     changeValueWithButton = (e, sign, name) => {
        e.preventDefault();

        if(sign === '+') {
            let value = ++e.target.previousElementSibling.value;
            switch(name){
                case 'HEIGHT':
                    this.setState({
                        height: value
                    }); break;
                case 'AGE':
                    this.setState({
                        age: value
                    }); break;
                case 'SHOE_SIZE':
                    this.setState({
                        shoeSize: value
                    }); break;
                    
                default: break;
            }

        } else if (sign ==='-') {
            let value = e.target.nextElementSibling.value;
            
            if(value > 1) {
                value--;
                switch(name){
                    case 'HEIGHT':
                        this.setState({
                            height: value
                        }); break;
                    case 'AGE':
                        this.setState({
                            age: value
                        }); break;
                    case 'SHOE_SIZE':
                        this.setState({
                            shoeSize: value
                        }); break;  

                    default: break;

                }
            }
        }
    }
     changeFavouriteColor = (e) => {
        this.setState({
            color: e.target.value
        })
    }
     changeFavouriteGender = (e) => {
        this.setState({
            gender: e.target.id
        })
    }

     handleSubmit = (e) => {
        e.preventDefault();


        const newKid = {
           name: this.state.name,
           height: this.state.height,
           age: this.state.age,
           shoeSize: this.state.shoeSize,
           color: this.state.color,
           gender: this.state.gender
        }

        console.log(newKid);

        //add new kid
        //this.props.editUser();
    }

     submitChanges = (e) => {
        e.preventDefault();

        const changedKid = {
            name:this.state.name,
            height:this.state.height,
            shoeSize:this.state.shoeSize,
            age:this.state.age,
            favColor:this.state.color,
            gender:this.state.gender
        }
        console.log(changedKid);
    }


render(){
    return (
        <div className="edit-child-block">
            <form onSubmit={this.submitChanges}>
                <div className="flying-exit" >
                    <img src={exit} alt="wyjście" 
                    onClick={removeAll}/>
                </div>
                <h2>Zmień dane dziecka</h2>
                    <div className="kid-img img-inside-img">
                        <img src={boyAvatar} alt="Skarb"/>   
                        <img className="img-on-img" src={plusCircle} alt="Skarb"/> 
                    </div>
                    
                
                    <div className="edit-child-text">
                        
                        <input className="kid-text-input" type="text" placeholder="Imię"
                        value={this.state.name}
                        onChange={(e) => {this.changeValueWithInput(e)}}/>

                    </div>
                <div className="child-F-grid">
                    <div className="edit-child-text">
                        Wzrost: [CM] <br/>
                        <div className="input-number">
                            <button 
                            onClick={(e) => {this.changeValueWithButton(e, '-', 'HEIGHT')}}
                            >-</button>
                            <input type="number" 
                             value={this.state.height}
                             onChange={(e) => {this.changeValueWithInput(e, 'HEIGHT')}}
                             name="height"
                            />
                            <button 
                            onClick={(e) => {this.changeValueWithButton(e, '+', 'HEIGHT')}}
                            >+</button>
                        </div>
                    </div>
                    <div className="edit-child-text">
                        Wiek: <br/>
                        <div className="input-number">
                            <button
                            onClick={(e) => {this.changeValueWithButton(e, '-', 'AGE')}}
                            >-</button>
                            <input type="number"
                            value={this.state.age}
                            onChange={(e) => {this.changeValueWithInput(e)}} 
                             name="age"
                            />
                            <button
                            onClick={(e) => {this.changeValueWithButton(e, '+', 'AGE')}}
                            >+</button>
                        </div>
                    </div>
                    <div className="edit-child-text">
                        Rozmiar buta: <br/>
                        <div className="input-number">
                            <button
                            onClick={(e) => {this.changeValueWithButton(e, '-', 'SHOE_SIZE')}}
                            >-</button>
                            <input type="number" 
                            value={this.state.shoeSize}
                            onChange={(e) => {this.changeValueWithInput(e)}}
                            name="sizeOfShoe"
                            />
                            <button
                            onClick={(e) => {this.changeValueWithButton(e, '+', 'SHOE_SIZE')}}
                            >+</button>
                        </div>
                    </div>
                    <div className="edit-child-text">
                        Kolor: <br/>
                        <input className="input-color" type="text"
                        value={this.state.color} 
                        onChange={(e)=>this.changeValueWithInput = (e)}/>
                    </div>
                </div>

                <div className="add-kid-input-sex">
                    <div>
                        <input name="sex" id="male" type="radio" />
                        <label className="first-label" htmlFor="male">Chłopiec</label>
                    </div>
                    <div>
                        <input name="sex" id="female" type="radio"/>
                        <label className="second-label" htmlFor="female">Dziewczynka</label>
                    </div>
                </div>

                <button className="btn purple-btn">
                   Zapisz
                </button>
            </form>   
        </div>
    )
  }
}

const mapStateToProps = state => {
    //  return{
    //      user: state.auth.user
    //  }
  }

export default connect(mapStateToProps, {editUser})(KidDetails)
