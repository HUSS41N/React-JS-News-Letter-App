import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
    // Creating state term to capture user input
    state = { userInput: "" };

    onInputChange = (event) => {
        this.setState({ userInput: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.userInput);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-class">
                        <label>NEWS 20-20</label>
                        <input
                            type="text"
                            placeholder="Search News"
                            value={this.state.userInput}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
