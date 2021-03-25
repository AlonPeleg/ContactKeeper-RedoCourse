import { useState } from "react";

const Header = () => {
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <form className="d-flex" onSubmit={onSubmit}>
          <input
            type="search"
            placeholder="Search..."
            className="form-control me-2"
            onChange={onChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
