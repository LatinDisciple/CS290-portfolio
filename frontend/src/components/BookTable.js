// import dependencies
import React from 'react';
import BookRow from './BookRow.js';
import TableHead from './TableHead.js';
import { HiDocumentAdd } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
function BookTable({recipes, onDelete, onEdit}) {
    const navigate = useNavigate();
    return (
        <table id ="recipes">
            <caption> Add and Edit Recipes<HiDocumentAdd onClick={() => navigate("/create")} /></caption>
            <TableHead />
            <tbody>
                {recipes.map((recipe, i) => 
                    <BookRow
                        recipe={recipe}
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
        </table>
    );
}

export default BookTable;