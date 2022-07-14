import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";

interface myProps {
  label: string;
  name: string;
}

function TextInputField(props: myProps) {
  const [field, meta] = useField(props.name);

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
        <TextField variant="outlined" fullWidth {...field} />
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

export default TextInputField;
