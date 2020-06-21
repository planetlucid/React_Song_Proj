import React, { Component } from "react";
import { connect } from "react-redux";

class SongForm extends Component {
  render() {
    const {
      title,
      img_url,
      artist,
      album,
      genre,
      key,
      mode,
      sales,
      streams,
      bpm,
      credits,
      structure,
    } = this.props.songFormData;
    return (
      <div>
        Add The Ingredients of Your Favorite Songs.
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              title="title"
              value={title}
            />
          </div>

          <div>
              <label htmlFor="img_url">Image:</label>
              <input 
                type="text"
                onChange={this.handleOnChange}
                title="img_url"
                value={img_url}
              />
          </div>

          <div>
            <label htmlFor="artist">Artist:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="artist"
              value={artist}
            />
          </div>

          <div>
            <label htmlFor="album">album:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="album"
              value={album}
            />
          </div>

          <div>
            <label htmlFor="genre">genre:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="genre"
              value={genre}
            />
          </div>

          <div>
            <label htmlFor="key">Key:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="key"
              value={key}
            />
          </div>

          <div>
            <label htmlFor="mode">Mode:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="mode"
              value={mode}
            />
          </div>

          <div>
            <label htmlFor="sales">Sales:</label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="sales"
              value={sales}
            />
          </div>

          <div>
            <label htmlFor="streams">Streams:</label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="streams"
              value={streams}
            />
          </div>

          <div>
            <label htmlFor="bpm">Bpm:</label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="bpm"
              value={bpm}
            />
          </div>

          <div>
            <label htmlFor="credits">Credits:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="credits"
              value={credits}
            />
          </div>

          <div>
            <label htmlFor="structure">Structure:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="structure"
              value={structure}
            />
          </div>
          
          <button type="submit">Add Song</button>
        </form>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songFormData: state.songFormData,
  };
};

export default connect(mapStateToProps)(SongForm);
