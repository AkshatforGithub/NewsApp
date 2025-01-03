import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imageUrl,url,author,date}= this.props;
    return (
      <div>
        <div className="card">
  <img src={!imageUrl?"https://th.bing.com/th/id/OIP.L1E87XXRZaz30nUfxM48GQHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}....</p>
    <p className="card-text"><small style={{fontWeight:'bold'}}>Published By {!author?"Unknown": author} on {new Date(date).toGMTString()
}</small></p>
    <a href={`${url}`} target="_blank" className="btn btn-sm btn-dark"style={{ backgroundColor: '#fb607f', color: '#98EECC',borderColor:'pink'}}>Read More</a>
  </div>
</div>

</div>
    )
  }
}

export default NewsItem
