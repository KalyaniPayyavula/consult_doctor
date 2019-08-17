import React from "react";
import { MelodyFormField, MelodyBox, MelodyText } from "../../basic_components";

const FormFieldLabel = props => {
  const { required, label, ...rest } = props;
  return (
    <MelodyFormField
      label={
        required ? (
          <MelodyBox direction="row">
            <MelodyText>{label}</MelodyText>
            <MelodyText color="status-critical">*</MelodyText>
          </MelodyBox>
        ) : (
          label
        )
      }
      required={required}
      {...rest}
    />
  );
};

export default FormFieldLabel;
