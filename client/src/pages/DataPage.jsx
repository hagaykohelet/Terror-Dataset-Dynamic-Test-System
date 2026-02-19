import { useEffect, useState } from 'react'
import Row from '../components/Row'
import '../style/Datapage.css'
import NavBar from '../components/NavBar'
import '../style/searchBox.css'
function Datapage() {
    const [terrorData, setTerrorData] = useState()
    const [fromYear, setFromYear] = useState()
    const [ToYear, setToYear] = useState()
    const [searchField, setSearchField] = useState()
    async function recieveData() {
        const res = await fetch('http://localhost:3000/loadcsv')
        const data = await res.json()
        setTerrorData(data.data)
    }

    useEffect(() => {

        recieveData()

    }, [])

    function filterData() {
        setTerrorData(terrorData.filter(item => item.iyear >= fromYear && item.iyear <= ToYear && (item.country_txt === searchField || item.city === searchField)))
    }


    return (
        <div>
            <NavBar text="System" />
            <div className='search-box'>
                <label htmlFor="search">Search:</label>
                <input type="text" name='search' id='search' onChange={(e) => setSearchField(e.target.value)} />
                <label htmlFor="yearbigger">Year greater than:</label>
                <input type="yearbigger" name='yearbigger' id='yearbigger' onChange={(e) => setFromYear(e.target.value)} />
                <label htmlFor="yearlittle">Year little than:</label>
                <input type="yearlittle" name='yearlittle' id='yearlittle' onChange={(e) => setToYear(e.target.value)} />
                <button onClick={filterData}>Filter</button>
            </div>
            <table>
                <tr>
                    <th>event id</th>
                    <th>year</th>
                    <th>country</th>
                    <th>city</th>
                    <th>attack Type</th>
                    <th>motive</th>
                </tr>
                {
                    terrorData?.map((item) => {
                        return (
                            <Row eventid={item.eventid} iyear={item.iyear} country_txt={item.country_txt} city={item.city} attacktype1_txt={item.attacktype1_txt} motive={item.motive} />
                        )
                    })
                }

            </table>
        </div>
    )

}

export default Datapage