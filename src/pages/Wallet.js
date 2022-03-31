import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field"> Total: 0 </span>
        <span data-testid="header-currency-field"> Câmbio: BRL </span>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => user;

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
