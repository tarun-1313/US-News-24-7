import React, { Component } from 'react';

export class NewsItem extends Component {
   
  render() {
    let { title, description, imageUrl, newsUrl, author,date,source} = this.props;

    return (
      <div className="my-4">
        <div className="card">
          <div style={ {
            display:'flex', justifyContent:'flex-end', position:'absolute',right:'0'}
          }>
          <span className=" badge rounded-pill bg-danger" >{source}</span>
          </div>
          <img
            src={imageUrl?imageUrl:"https://th.bing.com/th/id/OPAC.Mh1th0JIhBqtYA474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1"}
            className="card-img-top"
            alt="News"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
