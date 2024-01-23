import { useHistory, Link } from "react-router-dom";

const Navbar = ({searchText, setSearchText}) => {
const history = useHistory()
//useHistory directs to searchview page automatically when user types in search bar i.e when it is updated
  const updateSearchText = (e) =>
  {
    history.push('/search')
    setSearchText(e.target.value)
  }

  return (
    <nav className="navbar navbar-expand-lg text-bg-primary p-5">
      <div className="d-flex container-fluid">
        <Link className="navbar-brand" to="/">
          The Movie Browser Search Engine
        </Link>
        { /*<div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>*/
        }
           <form role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
          </form>
          </div>
    </nav>
  );
};

export default Navbar;
