import React, { useState } from "react"
const SearchBar = (props) => {
    const [state, setState] = useState({
        term: ''
    })
    const onInpurChange = (e) => {
        setState({ ...state, term: e.target.value })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onTermSubmit(state.term);
    }
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input value={state.term}
                        type="text"
                        onChange={onInpurChange}
                    />
                </div>
            </form>
        </div>
    )
}
export default SearchBar