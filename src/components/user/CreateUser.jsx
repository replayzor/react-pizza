import { useState } from "react";
import Button from "../../ui/Button";
import { useAppContext } from "../../context/AppProvider";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [localUsername, setLocalUsername] = useState("");
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!localUsername) return;

    dispatch({ type: "SET_USERNAME", payload: localUsername });
    setLocalUsername("");
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        autoComplete="name"
        placeholder="Your full name"
        value={localUsername}
        onChange={(e) => setLocalUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {localUsername !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
