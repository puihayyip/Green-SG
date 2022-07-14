import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import { useState } from "react";

interface myProps {
  label: string;
  name: string;
}

function PasswordInputField(props: myProps) {
  const [field, meta] = useField(props.name);
  const [visible, setVisible] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "10px",
        }}
      >
        <label htmlFor={field.name}>{props.label}</label>
        <OutlinedInput
          // variant="outlined"
          fullWidth
          {...field}
          type={visible ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {!visible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <ErrorMessage
        name={field.name}
        render={(msg) => (
          <div
            style={{ fontSize: "0.9rem", color: "red", position: "absolute" }}
          >
            {msg}
          </div>
        )}
      />
    </div>
  );
}

export default PasswordInputField;
