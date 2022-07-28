import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import MyTable from "./components/MyTable";
import "./app.scss";

function App() {
  const [users, setUsers] = useState(require("./users.json"));
  const [usersFilterAndSort, setUsersFilterAndSort] = useState(users);
  const [checked, setChecked] = useState(false);
  const SortData = (field) => {
    const copyUsers = usersFilterAndSort.concat();
    const sortUsers = copyUsers.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    setUsersFilterAndSort(sortUsers);
  };
  const FilterData = () => {
    const copyUsers = users.concat();
    const filterUsers = copyUsers.filter((user) =>
      getAge(user.birthday) > 18 ? user : null
    );
    checked ? setUsersFilterAndSort(filterUsers) : setUsersFilterAndSort(users);
  };

  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  useEffect(() => {
    FilterData();
  }, [checked]);

  return (
    <div className="app">
      <Container>
        <div>
          <Button
            onClick={() => SortData("name")}
            className="me-3 mb-3"
            variant="secondary"
          >
            Sort by name
          </Button>
          <Button
            onClick={() => SortData("birthday")}
            className="btn me-3 mb-3"
            variant="secondary"
          >
            Sort by birthday
          </Button>
          <ToggleButton
            className="me-3 mb-3"
            id="toggle-check"
            type="checkbox"
            variant="outline-secondary"
            checked={checked}
            onChange={(e) => setChecked(e.currentTarget.checked)}
          >
            Show old persons
          </ToggleButton>
        </div>
        <MyTable users={usersFilterAndSort} />
      </Container>
    </div>
  );
}

export default App;
