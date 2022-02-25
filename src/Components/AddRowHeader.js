import { PlusCircleFill } from "react-bootstrap-icons";
import { addRow } from '../Helpers/GridHelpers';


export default function AddRowHeader({ api, emptyRow }) {
  const onClick = () => {
    addRow(api, emptyRow);
  }

  return <PlusCircleFill color="green" onClick={onClick} />
}