import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Share from './Share';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

import './css/LongCards.css';

function LongCard(props) {
  var linkToUrl = "/article?id=" + props.id;
  return (
    <Link to={linkToUrl} key={props.index}>
      <Container className="longCard">
        <div className="row">
          <div className="col-12 col-lg-3">
            <Image src={props.image} thumbnail fluid />
          </div>
          <div className="col-12 col-lg-9 pl-xs-0 pl-lg-4" width="100%">
            <h1><i>{props.title}</i><Share title={props.title} url={props.url} /></h1>
            <p className='longCardDesc'>{props.description}</p>
            <div>
              <p style={{ float: 'left' }}><i>{props.date}</i></p>
              <div className="sectionTagArea" style={{ float: 'right' }}>
                <p className={"sectionTag ".concat(props.section.replace(/\s/g, '').toLowerCase())}>{props.section.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Link>

  );
}


class LongCards extends React.Component {
  constructor(props) {
    super(props);
    props.checkSwitch();
    this.state = {
      isLoading: true,
      longCards: [],
      company: props.company,
      section: props.section,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.section !== prevProps.section || this.props.company !== prevProps.company) {
      this.setState({ isLoading: true, longCards: [], company: this.props.company });
      let xhr = new XMLHttpRequest();
      var xhrURL;
      if (this.props.company === 'nytimes') {
        xhrURL = "https://rock-park-273800.appspot.com/topstories/" + this.props.section;
      } else {
        xhrURL = "https://rock-park-273800.appspot.com/guardianTopstories/" + this.props.section;
      }
      xhr.open("GET", xhrURL);
      var rendered;
      xhr.onload = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          rendered = JSON.parse(xhr.responseText).map((news, index) => LongCard({
            title: news.title,
            section: news.section,
            date: news.date,
            description: news.description,
            url: news.url,
            image: news.image,
            id: news.id,
            index: index
          }));
          this.setState({
            isLoading: false,
            longCards: rendered,
            section: this.props.section,
            company: this.props.company,
          });
        } else {
          console.error(xhr.statusText);
        }
      }.bind(this);
      xhr.send();
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true, longCards: [], company: this.props.company });
    let xhr = new XMLHttpRequest();
    let xhrURL;
    if (this.state.company === 'nytimes') {
      xhrURL = "https://rock-park-273800.appspot.com/topstories/" + this.props.section;
    } else {
      xhrURL = "https://rock-park-273800.appspot.com/guardianTopstories/" + this.props.section;
    }
    xhr.open("GET", xhrURL);
    var rendered;
    xhr.onload = function (e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        rendered = JSON.parse(xhr.responseText).map((news, index) => LongCard({
          title: news.title,
          section: news.section,
          date: news.date,
          description: news.description,
          url: news.url,
          image: news.image,
          id: news.id,
          index: index
        }));
        this.setState({
          isLoading: false,
          longCards: rendered,
          section: this.props.section,
          company: this.props.company,
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
        <div className="topNews">
          {this.state.longCards}
        </div>
      </div>

    );
  }
}

export default LongCards;