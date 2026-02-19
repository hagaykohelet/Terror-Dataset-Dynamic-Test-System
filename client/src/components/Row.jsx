import React from 'react'

function Row({eventid,iyear,country_txt,city,attacktype1_txt,motive}) {
  return (
     <tr>
        <td>{eventid}</td>
        <td>{iyear}</td>
        <td>{country_txt}</td>
        <td>{city}</td>
        <td>{attacktype1_txt}</td>
        <td>{motive}</td>
    </tr>
  )
}

export default Row