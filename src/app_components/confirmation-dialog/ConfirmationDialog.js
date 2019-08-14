import React from "react";
import Proptypes from "prop-types";
import {
  MelodyLayer,
  MelodyBox,
  MelodyHeading,
  MelodyText,
  MelodyButton
} from "../../basic_components";

const ConfirmationDialog = ({
  heading,
  text,
  primaryButton,
  secondaryButton,
  onClose,
  primaryButtonAction
}) => {
  return (
    <MelodyLayer
      position="center"
      modal
      onClickOutside={() => onClose()}
      onEsc={() => onClose()}
    >
      <MelodyBox pad="medium" gap="small" width="medium">
        <MelodyHeading level={3} margin="none">
          {heading}
        </MelodyHeading>
        <MelodyText>{text}</MelodyText>
        <MelodyBox
          as="footer"
          gap="small"
          direction="row"
          align="center"
          justify="end"
          pad={{ top: "medium", bottom: "small" }}
        >
          <MelodyButton
            label={secondaryButton}
            onClick={() => onClose()}
            color="dark-3"
          />
          <MelodyButton
            label={
              <MelodyText color="white">
                <strong>{primaryButton}</strong>
              </MelodyText>
            }
            onClick={() => primaryButtonAction()}
            primary
            color="status-critical"
          />
        </MelodyBox>
      </MelodyBox>
    </MelodyLayer>
  );
};

ConfirmationDialog.propTypes = {
  text: Proptypes.string.isRequired,
  primaryButton: Proptypes.string.isRequired,
  secondaryButton: Proptypes.string.isRequired
};

export default ConfirmationDialog;
