import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount , getTableData} from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
import Experience from './Experience';
import Education from './Education';

// css
import '../../css/dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getTableData();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading , dashdata } = this.props.profile;
    console.log('dashdata',dashdata)
    
    // let tabledata ;
    // tabledata =  dashdata.map( dashdataitem => {
    //          <tr>
    //            <td>1</td>
    //            <td>{dashdataitem.email}</td>
    //            <td>{dashdataitem.password}</td>
    //            <td>{dashdataitem.claimmoney}</td>
    //            <td>{dashdataitem.buy_epic}</td>
    //            <td>{dashdataitem.buy_common}</td>
    //            <td>{dashdataitem.buy_legendary}</td>
    //            <td>{dashdataitem.buy_rare}</td>
    //            <td>{dashdataitem.status}</td>
    //          </tr>
    //  })

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              <div>
                <p className="lead text-muted">Welcome {user.name}</p>
                <Link to="/create-profile" className="btn btn-lg btn-info">
                  View Result
                </Link>
                <p></p>
                <table className="table riped  table-hover table-bordered container">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Claimmoney</th>
                      <th>Buy_epic</th>
                      <th>Buy_common</th>
                      <th>Buy_legendary</th>
                      <th>Buy_rare</th>
                      <th>Status</th>
                      <th>Claim</th>
                    </tr>
                  </thead>
                  <tbody>
                     {dashdata && dashdata.map((dashdataItem) => {
                       return (
                         <tr>
                           <td>
                              1
                           </td>
                           <td>{dashdataItem.email}</td>
                            <td>{dashdataItem.password}</td>
                            <td>{dashdataItem.claimmoney}</td>
                            <td>{dashdataItem.buy_epic}</td>
                            <td>{dashdataItem.buy_common}</td>
                            <td>{dashdataItem.buy_legendary}</td>
                            <td>{dashdataItem.buy_rare}</td>
                            <td>{dashdataItem.status}</td>
                            <td>
                              <button>Claim</button> 
                            </td>
                         </tr>
                       )
                     })}
                  </tbody>
              
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount , getTableData})(
  Dashboard
);
