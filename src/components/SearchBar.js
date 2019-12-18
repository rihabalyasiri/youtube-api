import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoTitle: ''
        }
    }

    onInputChange = (e) => {
        this.setState({videoTitle:e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        // to pass the data from child Component to parent Component through callback function
        this.props.onSubmit(this.state.videoTitle)

    }
    render() {
        return (
            <div className="ui container search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Video:</label>
                        <input type="text" name="videoTitle"
                            placeholder="Search a Video..."
                            value={this.state.videoTitle}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>);
    }
}

export default SearchBar;