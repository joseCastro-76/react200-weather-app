import React from 'react';

function SearchHistory(props) {
    return (
        <div className="card">
            <div className="card-header">
                Search History
            </div>
            <div className="card-body">
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td>San Diego</td>
                            <td>04/28/2016</td>
                        </tr>
                        <tr>
                            <td>New York</td>
                            <td>04/28/2106</td>
                        </tr>
                        <tr>
                            <td>Wahington D.C.</td>
                            <td>04/28/2016</td>
                        </tr>
                        <tr>
                            <td>London</td>
                            <td>04/28/2016</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default SearchHistory;