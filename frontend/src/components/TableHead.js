// import dependencies
import React from 'react';

function TableHead() {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Servings</th>
                <th>Total Calories</th>
                <th>Entry Date</th>
                {/* <th>Ingredients</th> */}
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
    );
}

export default TableHead;