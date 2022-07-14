import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";

interface myProps {
  label: string;
  name: string;
  type:string
}

function InputField(props: myProps) {
  const [field, meta] = useField(props.name);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "10px",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <label htmlFor={field.name}>{props.label}</label>
      <TextField variant="outlined" fullWidth {...field} type={props.type}/>
      <ErrorMessage name={field.name} />
    </div>
  );
}

export default InputField;
