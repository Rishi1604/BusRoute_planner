import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/yourfolder/getContacts.php")
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
