import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.innerText)
  }

  render() {
    const { photos, year, fetching } = this.props;
    return <div className='ib page'>
      <p>
        <button className='btn' onClick={::this.onYearBtnClick}>2016</button>{' '}
        <button className='btn' onClick={::this.onYearBtnClick}>2015</button>{' '}
        <button className='btn' onClick={::this.onYearBtnClick}>2014</button>
      </p>
      <h3>{year} год</h3>
      {
        fetching ?
          <p>Loading...</p>
          :
          <p>You have {photos.length} photos in {year} year.</p>
      }
    </div>
  }
}

Page.propTypes = {
  photos: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  getPhotos: PropTypes.func.isRequired
};