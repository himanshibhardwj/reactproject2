import React from 'react'
import { Link } from 'react-router-dom'

const DashboardLeft = () => {
    return (
        <div>
            <div>
                <Link to={'/dashboardhome'}><button>Dashboard</button>
                    <div>
                        <img src={stack}/>
                    </div></Link>
            </div>
        </div>
    )
}

export default DashboardLeft