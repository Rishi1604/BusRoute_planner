import React, { useEffect, useState } from "react";
import axios from "axios";

// Step 1: Define the type for each contact
interface Contact {
  name: string;
  phone: string;
}

const Contacts: React.FC = () => {
  // Step 2: Tell TypeScript that contacts is an array of Contact
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    axios
      .get<Contact[]>("http://localhost/React_php/getcontacts.php")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  }, []);

  return (
    <div>
      <h2>Contact List</h2>
      <table style={{ border: "1px solid black", padding: "10px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black" }}>{contact.name}</td>
              <td style={{ border: "1px solid black" }}>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
