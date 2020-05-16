import React from 'react';

function SearchHistory(props) {
    const { searchHistory } = props;
    
    const list = searchHistory.reverse().map((search, index) => {
        return (
            <tr key={ index }>
                <td>{ search.name }</td>
                <td>{ search.date }</td>
            </tr>
        )
    });

    return (
        <div className="card">
            <div className="card-header">
                Search History
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <tbody>
                        { list }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default SearchHistory;