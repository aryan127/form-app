import { useState } from "react";
import "./App.css";
//screen 1 name
//screen 2 email ,gender
//screen 3 comments
//screen 4 pop up
function App() {
  const [count, setCount] = useState(0);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handlePrevious() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }
  function handlleNext() {
    if (count === 2) {
      return;
    }
    setCount(count + 1);
  }
  function handleGenderChange(event) {
    setGender(event.target.value);
    console.log(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleName(event) {
    setName(event.target.value);
  }
  function handleComments(event) {
    setComments(event.target.value);
  }
  function handleSubmit() {
    setSubmitted(!submitted);
  }
  const Screen1 = (
    <div className="form-box">
      <div style={{ flexDirection: "column", display: "flex", padding: 50 }}>
        <div style={{ fontSize: 18, display: "flex", marginBottom: 10 }}>
          Name
        </div>
        <input
          type="text"
          name="Name"
          placeholder="Enter your name"
          style={{ padding: 10 }}
          onChange={handleName}
          value={name}
        />
        <div style={{ flexDirection: "row", marginTop: 20, display: "flex" }}>
          {count > 0 && (
            <button
              style={{
                padding: 10,
                backgroundColor: "#1abb9c",
                width: 100,
                borderWidth: 0,
                borderRadius: 5,
                marginRight: 10,
              }}
              onClick={handlePrevious}
            >
              <div style={{ color: "white" }}>Previous</div>
            </button>
          )}
          {count >= 0 && (
            <button
              style={{
                padding: 10,
                backgroundColor: "#1abb9c",
                width: 100,
                borderWidth: 0,
                borderRadius: 5,
              }}
              onClick={handlleNext}
            >
              <div style={{ color: "white" }}>Next</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
  const Screen2 = (
    <div className="form-box">
      <div style={{ flexDirection: "column", display: "flex", padding: 50 }}>
        <div style={{ fontSize: 18, display: "flex", marginBottom: 10 }}>
          Email
        </div>
        <input
          type="text"
          name="Name"
          placeholder="Enter your e-mail"
          style={{ padding: 10 }}
          onChange={handleEmail}
          value={email}
        />
        <div
          style={{
            fontSize: 18,
            display: "flex",
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          Gender:
        </div>
        <div style={{ display: "flex", marginTop: 10 }}>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
        </div>

        <div style={{ flexDirection: "row", marginTop: 20, display: "flex" }}>
          {count > 0 && (
            <button
              style={{
                padding: 10,
                backgroundColor: "#1abb9c",
                width: 100,
                borderWidth: 0,
                borderRadius: 5,
                marginRight: 10,
              }}
              onClick={handlePrevious}
            >
              <div style={{ color: "white" }}>Previous</div>
            </button>
          )}
          {count >= 0 && (
            <button
              style={{
                padding: 10,
                backgroundColor: "#1abb9c",
                width: 100,
                borderWidth: 0,
                borderRadius: 5,
              }}
              onClick={handlleNext}
            >
              <div style={{ color: "white" }}>Next</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
  const Screen3 = (
    <div className="form-box">
      <div style={{ flexDirection: "column", display: "flex", padding: 50 }}>
        <div style={{ fontSize: 18, display: "flex", marginBottom: 10 }}>
          Comments
        </div>
        <input
          type="text"
          name="Name"
          placeholder="Enter your comments"
          style={{ padding: 10 }}
          onChange={handleComments}
          value={comments}
        />
        <div style={{ flexDirection: "row", marginTop: 20, display: "flex" }}>
          {count > 0 && (
            <button
              style={{
                padding: 10,
                backgroundColor: "#1abb9c",
                width: 100,
                borderWidth: 0,
                borderRadius: 5,
                marginRight: 10,
              }}
              onClick={handlePrevious}
            >
              <div style={{ color: "white" }}>Previous</div>
            </button>
          )}

          <button
            style={{
              padding: 10,
              backgroundColor: "#1abb9c",
              width: 100,
              borderWidth: 0,
              borderRadius: 5,
            }}
            onClick={handleSubmit}
          >
            <div style={{ color: "white" }}>Submit</div>
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div
      className="App"
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      {count === 0 && Screen1}
      {count === 1 && Screen2}
      {count == 2 && Screen3}
      {submitted && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleSubmit}>
              Close
            </button>
            <div className="modal-header">Form Details</div>
            <div className="modal-body">
              <p>
                <strong>Name:</strong> {name}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Gender:</strong> {gender}
              </p>
              <p>
                <strong>Comments:</strong> {comments}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
