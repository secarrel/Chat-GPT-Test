import React, { useState } from "react";
import styles from "../styles/ChatGptForm.module.css";

const ChatGptForm = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [relationship, setRelationship] = useState("Wife");
  const [personType, setPersonType] = useState("Sporty");
  const [age, setAge] = useState("21");
  const [loves, setLoves] = useState("Animals");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPreset = `My ${relationship} is a ${personType} ${age} year old who loves ${loves}.`;

    const fetchedResponse = await fetch("/.netlify/functions/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ preset: updatedPreset, question }),
    });
    const jsonResponse = await fetchedResponse.json();
    setResponse(jsonResponse.message);
  };

  return (
    <div className={styles.wrapper}>
      <div>thr</div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Type of Person:</label>
              <select
                value={personType}
                onChange={(e) => setPersonType(e.target.value)}
              >
                <option value="Sporty">Sporty</option>
                <option value="Intellectual">Intellectual</option>
                <option value="Creative">Creative</option>
                <option value="Adventurous">Adventurous</option>
              </select>
            </div>
            <div>
              <label>Relationship:</label>
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
              >
                <option value="Wife">Wife</option>
                <option value="Husband">Husband</option>
                <option value="Friend">Friend</option>
                <option value="Sibling">Sibling</option>
                <option value="Parent">Parent</option>
              </select>
            </div>
            <div>
              <label>Age:</label>
              <input
                type="number"
                value={age}
                min="1"
                max="100"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label>Loves:</label>
              <select value={loves} onChange={(e) => setLoves(e.target.value)}>
                <option value="Animals">Animals</option>
                <option value="Books">Books</option>
                <option value="Travel">Travel</option>
                <option value="Music">Music</option>
              </select>
            </div>
            <div>
              <label>Ask a Question:</label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
        {response && (
          <div>
            <textarea value={response} readOnly />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatGptForm;
