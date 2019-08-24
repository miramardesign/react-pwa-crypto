import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { IoIosRefresh } from 'react-icons/io';

function RefreshButton({
  refreshButton: { id, label, disabled = false },
  onDisabledButton,
}) {
  return (
    <React.Fragment>
      <Button
        variant="outline-success"
        className="square-button"
        disabled={disabled}
      >
        <IoIosRefresh />
        <div>{label}</div>
      </Button>
    </React.Fragment>
  );
}

RefreshButton.propTypes = {
  refreshButton: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  }),
  onDisabledButton: PropTypes.func,
};

export default RefreshButton;
