import React, { useState } from 'react';
import StaffRow from '../components/StaffRow.js';

function StaffPage() {
    const [results, setResults] = useState([]);
    const fetchResults = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((res) => res.json())
            .then((res) => {
                setResults(res.results);
            })
            .catch(() => {
                alert("Something went wrong when requesting access to the Random User Generator Server.");
            });
    };
    return (
        <div>
            <h2>Staff List</h2>
            <article>
                <p>
                    <button id="server" onClick={fetchResults} value="add">Press Here</button>
                    &nbsp;to add ten staff members from the <a href="https://randomuser.me/" target="blank" rel="noreferrence">random user api.</a>
                </p>

                <h3>Staff:</h3>
                <table>
                    <caption>Name, email, phone, and location</caption>
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name &amp; Email</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((p, i) => <StaffRow p={p} key={i} /> )}
                    </tbody>
                </table>
            </article>
        </div>
    );
}

export default StaffPage;