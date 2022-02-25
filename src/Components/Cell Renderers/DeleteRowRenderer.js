import { XCircleFill } from "react-bootstrap-icons";
import { deleteRow } from "../../Helpers/GridHelpers";

export default function DeleteRowRenderer({ api, data, ...rest }) {
  const onClick = () => {
    deleteRow(api, data);
  }

  return <XCircleFill
    style={{ cursor: "pointer" }}
    color="red"
    onClick={onClick} />
}