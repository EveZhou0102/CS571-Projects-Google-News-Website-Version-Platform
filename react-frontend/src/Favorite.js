import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdDelete } from 'react-icons/md';
import ShareFromSmall from './ShareFromSmall';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from 'react-toastify';

import './css/SmallCards.css';


function SmallCard(props) {
  var linkToUrl = "/article?id=" + props.id;

  function removeArticle(e) {
    e.preventDefault();
    var articles = JSON.parse(localStorage.getItem("articles"));
    var articleId = props.id;
    articles[articleId] = undefined;
    localStorage.setItem("articles", JSON.stringify(articles));
    toast("Removing " + props.title, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      color: 'black',
    });
  }

  return (
    <Link to={linkToUrl}>
      <Card style={{ boxShadow: '0px 5px 10px #d4d4d4' }}>
        <Card.Body>
          <h1>
            <i>{props.title}</i>
            <ShareFromSmall title={props.title} company={props.company} url={props.url} />
            <MdDelete onClick={(e) => {
              removeArticle(e);
              props.unsaving();
            }} />
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange={false}
              draggable
              pauseOnHover={false}
              transition={Zoom}
            />
          </h1>
          <Image src={props.image} thumbnail fluid />
          <div>
            <Card.Text style={{ float: 'left' }}><i>{props.date}</i></Card.Text>
            <Row className="sectionTagArea" style={{ float: 'right' }}>
              <div className={"sectionTag ".concat(props.section.replace(/\s/g, '').toLowerCase())} style={{ marginRight: '0.5rem' }} >{props.section.toUpperCase()}</div>
              <div className={"sectionTag ".concat(props.company.toLowerCase())}>{props.company.toUpperCase()}</div>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

function SmallCardRows(props) {
  var cards = props.cards;
  var rows = [];
  for (let i = 0; i <= cards.length / 4; i++) {
    rows.push(
      <Row key={i}>{
        cards.slice(i * 4, i * 4 + 4).map((card, index) =>
          <Col sm={12} lg={3} key={index} style={{ padding: '0.1rem 0.5rem' }}>{card}</Col>
        )}
      </Row>
    )
  }
  return (
    <div>
      {rows}
    </div>
  );
}

function TitleOfFavorite(props) {
  if (props.result === null || props.result === undefined || props.result.length === 0) {
    return (<p style={{ textAlign: 'center' }}>You have no saved articles</p>);
  } else {
    return (<p style={{ color: '#3c3335', fontSize: '2.3rem', paddingLeft: '1rem', fontWeight: 'bold', marginBottom: '0' }}>Favorites</p>);
  }
}

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    props.checkSwitch();
    let articles = JSON.parse(localStorage.getItem("articles"));
    let result;
    if (articles === null) {
      result = null;
    } else {
      result = Object.values(articles).map((news, index) => <SmallCard title={news.title} section={news.section} date={news.date} url={news.url} image={news.image} id={news.id} index={index} unsaving={() => this.unsaving()} company={news.company} />
      );
    }
    this.state = {
      result: result,
    }
  }

  unsaving() {
    let articles = JSON.parse(localStorage.getItem("articles"));
    let result;
    if (articles === null) {
      result = null;
    } else {
      result = Object.values(articles).map((news, index) => <SmallCard title={news.title} section={news.section} date={news.date} url={news.url} image={news.image} id={news.id} index={index} unsaving={() => this.unsaving()} company={news.company} />
      );
    }
    this.setState({
      result: result,
    })
  }

  render() {
    return (
      <div>
        <TitleOfFavorite result={this.state.result} />
        <SmallCardRows cards={this.state.result} />
      </div>
    );
  }
}

export default Favorite;