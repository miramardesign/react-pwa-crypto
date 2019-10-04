import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { IoMdReturnLeft } from 'react-icons/io';
import { Link } from "react-router-dom";

function BackButton({
  backButton: { id, label, disabled = false },
  onDisabledButton,
}) {
  return (
    <React.Fragment>
      <Link to="/">
        <Button
          variant="outline-danger"
          className="square-button"
          disabled={disabled}
        >
          <IoMdReturnLeft />

          {label}
        </Button>
      </Link>
    </React.Fragment>
  );
}

BackButton.propTypes = {
  backButton: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  }),
  onDisabledButton: PropTypes.func,
};

export default BackButton;
