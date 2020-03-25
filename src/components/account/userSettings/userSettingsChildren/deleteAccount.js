import React, {Component    } from 'react'
import {connect} from 'react-redux';
import a from '../../../../images/a.png';
import '../userSettings.min.css';
import PropTypes from 'prop-types';
import {deleteUser} from '../../../../actions/authActions';

class DeleteAccount extends Component {

    handleDelete = () => {

        
    }

    static propTypes = {
        deleteUser: PropTypes.func
    }

render() {
    
    return (
        <div className="delete-account">
            <h2>Usuwanie konta</h2>
            <div className="change-data-input-and-label">
                <label className="change-data-label" htmlFor="username">Hasło</label>
                <input className="change-data-input" type="password" id="password"/>
            </div>
            <div className="change-data-input-and-label">
                <label className="change-data-label" htmlFor="username">Powtórz hasło</label>
                <input className="change-data-input" type="password" id="repeatPassword"/>
            </div>
            <h2>Czy na pewno chcesz nas opuścić?</h2>
            <div>
                <img src={a} alt="Na pewno?" />
            </div>
            <button onClick={this.handleDelete} className="btn purple-btn">Usuń konto</button>
        </div>
    )
   }
}

export default connect(null, {deleteUser})(DeleteAccount);
