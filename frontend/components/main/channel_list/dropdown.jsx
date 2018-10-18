// credit: https://github.com/ameet01/slax/blob/master/frontend/components/main/mainleft/header/dropdown.jsx
import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='dropdown' >
          <div className='dropdown-header'>
            <img className='profile-pic' src='https://lh3.googleusercontent.com/7_oM7ibjp1PjE402kQH7lxQmWuG2yIS0UsUAqgMMMmxNLXBq3TBOExoEjtbDJvMzC-zYCexs-PmSDO3z_mJkKp3Vww1Yny7fu1sGgjQOUDUttxtOyjXkPplmbFI2OonypQSIQetgDwmWpZBWRKq2VZpSPk5VjwixJXnBDsHLWXHGMslp3_VmujDwHnxwObmVAZKDMnwSKf5-dP_Hp8yMfN9grV_mvRC059wacl6iQGVWPinFNBCzICKk7fAOHE7gSb4eHie2alaFMhD8M0RtjWARA3KzBpp66SdlzK-855UiN8ion9o5zIfGizgnzP3C_pzYkNFtn3-D1nqZaQKPIg2v9O4-j7iYI8qH5e69dRiKPZidIRrbf6URSdQLPF0egcnr_jDsCECi7bY3a2IS3YA3NcMqQKogxyMWSa0Bedn_8_DRCD2AgHaCTAhmh1QRRK0nAKrswx1YWgozdGMPuxdFS9UnbBPVh5fGtURFY_evyvcBEzVD8QNMg3rVvw3RiiJsf0Gy0k7QpEq-iRX_Na4VaRC-OYnf9pbOhwp0Ndou7Z3jBFaTirqkOgxFQe51JD0tP8zHSpveqtd5VVkWkCcXZQS4ulpNiEqOBWC-pF4Ed2Sg1U_sMjNbpJbkOFl7=s892-no'
              alt='SlackSloth'
              height='36'
              width='36'/>
            <h3 className='dropdown-username'>{this.props.currentUser.username}</h3>
          </div>
          <ul>
            <li className='dropdown-signout' onClick={this.props.logout}>Sign out</li>
          </ul>
      </div>
    );
  }
}

export default Dropdown;
