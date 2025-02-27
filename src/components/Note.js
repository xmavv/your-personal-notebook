import Dot from "./Dot";
import styles from "./Notes.module.css";
import { useNote } from "../contexts/NoteContext";
import { colors } from "./Dot";

export default function Note({ note }) {
  const { dispatch, selectedNote } = useNote();
  const isSelected = note.id === selectedNote?.id;

  return (
    <li
      style={{ color: colors[note.color] }}
      className={isSelected ? styles.noteListItemSelected : styles.noteListItem}
      onClick={() => dispatch({ type: "note/selected", payload: note })}
    >
      <Dot cssClass={`dot ${note.color}`} />
      <h3 className="heading-tertiary">{note.title}</h3>
    </li>
  );
}
