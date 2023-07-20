import React from 'react';

function StaffRow({p}) {
    return(
        <>
        <tr>
            <td>
                <img src={p.picture.thumbnail} alt="Random portriat" />
            </td>
            <td>
                <a href="mailto:{p.email}">
                    {p.name.first}&nbsp;
                    {p.name.last}
                </a>
            </td>
            <td>{p.phone}</td>
            <td>{p.location.city}</td>
        </tr>
        </>
    )
}

export default StaffRow;