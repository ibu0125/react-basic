import React, { useEffect, useState } from "react";
import axios from "axios";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // 修正: URL の 'h' を削除
        const response = await axios.get(
          "http://127.0.0.1:5274/api/Form/contacts"
        );

        // 修正: 必要に応じてデータの取得形式を調整
        setContacts(response.data); // response.data.contacts が必要な場合はこちらに変更
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setError("お問い合わせを読み込むことができませんでした。");
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h2>お問い合わせ一覧</h2>
      {error && <p>{error}</p>}
      <ul>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <li key={contact.id}>
              <strong>名前:</strong> {contact.name} <br />
              <strong>メールアドレス:</strong> {contact.email} <br />
              <strong>メッセージ:</strong> {contact.message}
            </li>
          ))
        ) : (
          <p>お問い合わせはまだありません。</p>
        )}
      </ul>
    </div>
  );
}

export default ContactList;
