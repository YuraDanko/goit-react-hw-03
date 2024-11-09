const Contact = ({ contact, onDelete }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
