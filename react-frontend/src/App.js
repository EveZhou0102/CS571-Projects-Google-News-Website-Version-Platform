import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Select from './Select';
import LongCards from './LongCards';
import SmallCards from './SmallCards';
import { Link, withRouter } from 'react-router-dom';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';
import SwitchBox from './SwitchBox';
import DetailCard from './DetailCard';
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md';
import Favorite from './Favorite';
import NavLink from 'react-bootstrap/NavLink';

class App extends React.Component {
  constructor(props) {
    super(props);
    let setCompany = (localStorage.company === undefined) ? "guardian" : localStorage.company;
    localStorage.setItem("company", setCompany);
    let inFavorite = (localStorage.inFavorite === undefined) ? false : localStorage.inFavorite;
    localStorage.setItem("inFavorite", inFavorite);
    let bookmarkBorder, bookmark;
    if (inFavorite === true) {
      bookmarkBorder = 'none';
      bookmark = 'block';
    } else {
      bookmarkBorder = 'block';
      bookmark = 'none';
    }
    this.state = {
      company: setCompany,
      showSwitch: 'flex',
      inFavorite: inFavorite,
      bookmarkBorder: bookmarkBorder,
      bookmark: bookmark,
    }
  }

  changeCompany(checked) {
    const company = checked ? "guardian" : "nytimes";
    this.setState({
      company: company,
    });
    localStorage.setItem("company", company);
  }

  checkSwitch(pathname) {
    const shouldShowSwitch = ['/', '/world', '/politics', '/business', '/technology', '/sports'];
    const showSwitch = this.state.showSwitch;
    const nowshow = shouldShowSwitch.includes(pathname);
    if (nowshow && showSwitch === 'none') {
      this.setState({
        showSwitch: 'flex',
      });
    } else if (!nowshow && showSwitch === 'flex') {
      this.setState({
        showSwitch: 'none',
      });
    }
    const inFavorite = (pathname === '/favorites');
    if (inFavorite !== this.state.inFavorite) {
      let bookmarkBorder, bookmark;
      if (inFavorite === true) {
        bookmarkBorder = 'none';
        bookmark = 'block';
      } else {
        bookmarkBorder = 'block';
        bookmark = 'none';
      }
      this.setState({
        inFavorite: inFavorite,
        bookmarkBorder: bookmarkBorder,
        bookmark: bookmark,
      });
      localStorage.setItem("inFavorite", inFavorite);
    }
  }

  checkActive(props) {
    console.log(props);
    console.log(window.location.href.slice(24));
    let section = window.location.href.slice(24) === "" ? 'home' : window.location.href.slice(24);
    const array = ['home', 'world', 'politics', 'business', 'technology', 'sports'];
    array.forEach((item) => {
      console.log(item);
      let element = document.getElementById(item);
      console.log(document);
      if (item === section) {
        if (!element.classList.contains("active")) {
          element.classList.add("active");
        }
      } else {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
        }
      }
    });
  }

  render() {
    return (
      <main>
        <Navbar variant="dark" className="navbar" expand="lg">
          <Navbar.Brand style={{ width: '13rem', fontSize: '1rem', color: 'black' }} variant="light">
            <Select />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink id='home' as={Link} to='/' >Home</NavLink>
              <NavLink id='world' as={Link} to='/world'>World</NavLink>
              <NavLink id='politics' as={Link} to='/politics'>Politics</NavLink>
              <NavLink id='business' as={Link} to='/business' >Business</NavLink>
              <NavLink id='technology' as={Link} to='/technology' >Technology</NavLink>
              <NavLink id='sports' as={Link} to='/sports' >Sports</NavLink>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/favorites' style={{ display: this.state.bookmarkBorder }}>
                <MdBookmarkBorder size={23} />
              </Nav.Link>
              <Nav.Link as={Link} to='/' style={{ display: this.state.bookmark }}>
                <MdBookmark size={23} />
              </Nav.Link>
            </Nav>
            <Nav style={{ display: this.state.showSwitch }}>
              <Nav.Item style={{ padding: '0.5rem  1rem 0 0' }}>NYTimes</Nav.Item>
              <Nav.Item style={{ padding: '0.5rem  1rem 0 0' }}><SwitchBox onclick={(checked) => this.changeCompany(checked)} company={this.state.company}></SwitchBox></Nav.Item>
              <Nav.Item style={{ padding: '0.5rem  0.5rem 0 0' }}>Guardian</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/" exact render={(props) => {
            return (<LongCards company={this.state.company} section="home" checkSwitch={() => this.checkSwitch(props.location.pathname)} />);
          }}>
          </Route>
          <Route path="/search" exact render={(props) => {
            return (<SmallCards keyword={props.location.search.slice(3)} company={this.state.company} checkSwitch={() => this.checkSwitch(props.location.pathname)} />);
          }} />
          <Route path='/article' exact render={(props) => {
            return (<DetailCard id={props.location.search.slice(4)} company={this.state.company} checkSwitch={() => this.checkSwitch(props.location.pathname)} />);
          }} />
          <Route path='/favorites' exact render={(props) => {
            return (<Favorite checkSwitch={() => this.checkSwitch(props.location.pathname)} />);
          }} />
          <Route path="/:section" render={(props) => {
            return (<LongCards company={this.state.company} section={props.match.params.section} checkSwitch={() => this.checkSwitch(props.location.pathname)} />);
          }}>
          </Route>
        </Switch>
      </main >
    );
  }

}

export default App;