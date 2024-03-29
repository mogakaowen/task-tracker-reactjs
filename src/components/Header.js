import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const color = "green";
  const text = "Add";
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : `${color}`}
          text={showAdd ? "Close" : `${text}`}
          onClick={onAdd}
        />
      )}
      {/* // if location is home page, show button i.e useLocation hook from React Router to conditionally render a button based on the current path. */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
