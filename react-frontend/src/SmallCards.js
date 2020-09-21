import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from './Spinner';
import Share from './Share';
import { Link } from 'react-router-dom';

import './css/SmallCards.css';


function SmallCard(props) {
  var linkToUrl = "/article?id=" + props.id;
  return (
    <Link to={linkToUrl}>
      <Card style={{ boxShadow: '0px 5px 10px #d4d4d4' }}>
        <Card.Body>
          <h1><i>{props.title}</i><Share title={props.title} company={props.company} url={props.url} /></h1>
          <Image src={props.image} thumbnail fluid />
          <div>
            <Card.Text style={{ float: 'left' }}><i>{props.date}</i></Card.Text>
            <div className="sectionTagArea" style={{ float: 'right' }}>
              <Card.Text className={"sectionTag ".concat(props.section.replace(/\s/g, '').toLowerCase())}>{props.section.toUpperCase()}</Card.Text>
            </div>
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

class SmallCards extends React.Component {
  constructor(props) {
    super(props);
    props.checkSwitch();
    this.state = {
      isLoading: true,
      rows: [],
      title: null,
      company: props.company,
      keyword: props.keyword,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.keyword !== prevProps.keyword || this.props.company !== prevProps.company) {
      this.setState({ isLoading: true, rows: [], title: null, keyword: this.props.keyword, company: this.props.company });
      let xhr = new XMLHttpRequest();
      let xhrURL;
      if (this.props.company === 'nytimes') {
        xhrURL = "https://rock-park-273800.appspot.com/search?q=" + this.props.keyword;
      } else {
        xhrURL = "https://rock-park-273800.appspot.com/guardianSearch?q=" + this.props.keyword;
      }
      xhr.open("GET", xhrURL);
      var rendered;
      xhr.onload = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          rendered = JSON.parse(xhr.responseText).map((news, index) => SmallCard({
            title: news.title,
            section: news.section,
            date: news.date,
            url: news.url,
            image: news.image,
            id: news.id,
            index: index
          }));
          this.setState({
            isLoading: false,
            rows: <SmallCardRows cards={rendered} />,
            title: <p style={{ color: '#3c3335', fontSize: '2.3rem', paddingLeft: '1rem', fontWeight: 'bold', marginBottom: '0' }}>Results</p>,
            company: this.props.company,
            keyword: this.props.keyword,
          });
        } else {
          console.error(xhr.statusText);
        }
      }.bind(this);
      xhr.send();
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true, rows: [], title: null, keyword: this.props.keyword, company: this.props.company });
    let xhr = new XMLHttpRequest();
    let xhrURL;
    if (this.props.company === 'nytimes') {
      xhrURL = "https://rock-park-273800.appspot.com/search?q=" + this.props.keyword;
    } else {
      xhrURL = "https://rock-park-273800.appspot.com/guardianSearch?q=" + this.props.keyword;
    }
    xhr.open("GET", xhrURL);
    var rendered;
    xhr.onload = function (e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        rendered = JSON.parse(xhr.responseText).map((news, index) => SmallCard({
          title: news.title,
          section: news.section,
          date: news.date,
          url: news.url,
          image: news.image,
          id: news.id,
          index: index
        }));
        this.setState({
          isLoading: false,
          rows: <SmallCardRows cards={rendered} />,
          title: <p style={{ color: '#3c3335', fontSize: '2.3rem', paddingLeft: '1rem', fontWeight: 'bold', marginBottom: '0' }}>Results</p>,
          company: this.props.company,
          keyword: this.props.keyword,
        });
      } else {
        console.error(xhr.statusText);
      }
    }.bind(this);
    xhr.send();
  }

  render() {
    return (
      <div>
        <Spinner isLoading={this.state.isLoading} />
        <div className="result">
          {this.state.title}
          <div style={{ margin: '0 0.5rem' }}>{this.state.rows}</div>
        </div>
      </div>
    );
  }
}

export default SmallCards;