export default function Contact({ contact, handleDelete }) {
  const { id, name, number } = contact;

  const onDelete = () => {
    handleDelete(id);
  };

  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
