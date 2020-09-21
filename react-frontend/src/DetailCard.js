import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Spinner from './Spinner';
import { EmailShareButton, FacebookShareButton, TwitterShareButton, EmailIcon, FacebookIcon, TwitterIcon } from 'react-share';
import ReactTooltip from 'react-tooltip';
import Commentbox from './Commentbox';
import { MdBookmark, MdBookmarkBorder } from 'react-icons/md';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Element, scroller, animateScroll } from 'react-scroll';
import 'react-toastify/dist/ReactToastify.min.css';

import './css/DetailCard.css';

function Detail(props) {
  function saveArticle() {
    var articles = JSON.parse(localStorage.getItem("articles"));
    var articleId = props.id;
    if (articles === null) {
      articles = new Object();
    }
    articles[articleId] = props;
    localStorage.setItem("articles", JSON.stringify(articles));
    document.getElementById('detailNotSaved').style.display = 'none';
    document.getElementById('detailSaved').style.display = 'block';
    toast("Saving " + props.title, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  }

  function removeArticle() {
    var articles = JSON.parse(localStorage.getItem("articles"));
    var articleId = props.id;
    articles[articleId] = undefined;
    localStorage.setItem("articles", JSON.stringify(articles));
    document.getElementById('detailNotSaved').style.display = 'block';
    document.getElementById('detailSaved').style.display = 'none';
    toast("Removing - " + props.title, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      color: 'black',
    });
  }

  var count = 0, breakpoint = 0;
  for (let i = 0; i < props.description.length; i++) {
    let c = props.description.charAt(i)
    if (c === '.' || c === '?' || c === '!') {
      if (i < props.description.length - 1 && props.description.charAt(i + 1) === '"') {
        i++;
      }
      count++;
      if (count === 4) {
        breakpoint = i + 1;
        break;
      }
    }
  }
  var paragraphsPart, paragraphsWhole;
  if (breakpoint === 0 || breakpoint === props.description.length) {
    paragraphsPart = props.description.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>);
    paragraphsWhole = props.description.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>);
  } else {
    paragraphsPart = (props.description.slice(0, breakpoint) + '...').split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>);
    paragraphsWhole = props.description.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>);
  }

  // var paragraphs = props.description.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>);
  var notSavedBookmark, savedBookmark;
  if (JSON.parse(localStorage.getItem("articles")) === null || JSON.parse(localStorage.getItem("articles"))[props.id] === undefined) {
    notSavedBookmark = 'block';
    savedBookmark = 'none';
  } else {
    notSavedBookmark = 'none';
    savedBookmark = 'block';
  }
  return (
    <Card style={{ boxShadow: '0px 5px 10px #d4d4d4', margin: '1rem' }} key={props.index}>
      <Card.Body>
        <Row>
          <p style={{ fontSize: '1.8rem' }}><i>{props.title}</i></p>
        </Row>
        <Row>
          <p style={{ fontSize: '1.5rem', paddingLeft: '1rem' }}><i>{props.date}</i></p>
          <div style={{ marginLeft: 'auto' }}>
            <FacebookShareButton url={props.url} hashtag="#CSCI_571_NewsApp" target="_blank" >
              <FacebookIcon size={32} round data-tip="Facebook" />
              <ReactTooltip className='tooltip' place='top' type='dark' effect='solid' />
            </FacebookShareButton>
            <TwitterShareButton url={props.url} hashtags={["CSCI_571_NewsApp"]}>
              <TwitterIcon size={32} round data-tip="Twitter" />
              <ReactTooltip className='tooltip' place='top' type='dark' effect='solid' />
            </TwitterShareButton>
            <EmailShareButton url={props.url} subject="#CSCI_571_NewsApp" className='mr-sm-2 mr-lg-5'>
              <EmailIcon size={32} round data-tip="Email" />
              <ReactTooltip className='tooltip' place='top' type='dark' effect='solid' />
            </EmailShareButton>
          </div>
          <div className='bookmark ml-sm-2 ml-lg-5' >
            <MdBookmarkBorder id='detailNotSaved' size={35} color='#ef002d' onClick={saveArticle} style={{ display: notSavedBookmark }} data-tip="Bookmark" />
            <ReactTooltip className='tooltip' place='top' type='dark' effect='solid' />
            <MdBookmark id='detailSaved' size={35} color='#ef002d' onClick={removeArticle} style={{ display: savedBookmark }} data-tip="Bookmark" />
            <ReactTooltip className='tooltip' place='top' type='dark' effect='solid' />
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
          </div>
        </Row>
        <Row>
          <Image src={props.image} className='detailImage' />
        </Row>
        <Element
          id="first"
          name="first"
        >
          {paragraphsPart}
        </Element>
        <Element
          id="second"
          name="second"
        >
          <Row>
            <IoIosArrowDown style={{ marginLeft: 'auto' }} onClick={() => {
              scroller.scrollTo("second", {
                duration: 800,
                delay: 0,
                smooth: "true"
              });
              document.getElementById("first").style.display = "none";
              document.getElementById("second").style.display = "none";
              document.getElementById("third").style.display = "block";
              document.getElementById("fourth").style.display = "block";
            }} />
          </Row>
        </Element>
        <Element
          id="third"
          name="third"
          style={{ display: 'none' }}
        >
          {paragraphsWhole}
        </Element>
        <Element
          id="fourth"
          name="fourth"
          style={{ display: 'none' }}
        >
          <Row>
            <IoIosArrowUp style={{ marginLeft: 'auto' }} onClick={() => {
              animateScroll.scrollToTop();
              document.getElementById("first").style.display = "block";
              document.getElementById("second").style.display = "block";
              document.getElementById("third").style.display = "none";
              document.getElementById("fourth").style.display = "none";
            }}
            />
          </Row>
        </Element>
      </Card.Body>
    </Card>
  );
}

class DetailCard extends React.Component {
  constructor(props) {
    super(props);
    props.checkSwitch();
    this.state = {
      isLoading: true,
      detail: [],
      company: props.company,
      id: props.id,
      commentbox: 'none'
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id || this.props.company !== prevProps.company) {
      this.setState({ isLoading: true, longCards: [], company: this.props.company, commentbox: 'none' });
      let xhr = new XMLHttpRequest();
      let xhrURL;
      if (this.state.company === 'nytimes') {
        xhrURL = "https://rock-park-273800.appspot.com/article?id=" + this.props.id;
      } else {
        xhrURL = "https://rock-park-273800.appspot.com/guardianArticle?id=" + this.props.id;
      }
      xhr.open("GET", xhrURL);
      var rendered = [];
      xhr.onload = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          let temp = [];
          temp[0] = JSON.parse(xhr.responseText);
          rendered = temp.map((news, index) => Detail({
            title: news.title,
            section: news.section,
            date: news.date,
            description: news.description,
            url: news.url,
            image: news.image,
            id: news.id,
            index: index,
            company: this.props.company
          }));
          this.setState({
            isLoading: false,
            detail: rendered,
            section: this.props.section,
            id: this.props.id,
            commentbox: 'block',
          });
        } else {
          console.error(xhr.statusText);
        }
      }.bind(this);
      xhr.send();
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true, longCards: [], company: this.props.company, commentbox: 'none', });
    let xhr = new XMLHttpRequest();
    let xhrURL;
    if (this.state.company === 'nytimes') {
      xhrURL = "https://rock-park-273800.appspot.com/article?id=" + this.props.id;
    } else {
      xhrURL = "https://rock-park-273800.appspot.com/guardianArticle?id=" + this.props.id;
    }
    xhr.open("GET", xhrURL);
    var rendered = [];
    xhr.onload = function (e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let temp = [];
        temp[0] = JSON.parse(xhr.responseText);
        rendered = temp.map((news, index) => Detail({
          title: news.title,
          section: news.section,
          date: news.date,
          description: news.description,
          url: news.url,
          image: news.image,
          id: news.id,
          index: index,
          company: this.props.company
        }));
        this.setState({
          isLoading: false,
          detail: rendered,
          section: this.props.section,
          id: this.props.id,
          commentbox: 'block',
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
        <div style={{ display: this.state.commentbox }}>
          {this.state.detail}
          <Commentbox articleId={this.state.id} />
        </div>

      </div>

    );
  }
}

export default DetailCard;