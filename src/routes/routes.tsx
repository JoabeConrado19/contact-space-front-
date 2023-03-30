import { Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../pages/Dashboard/Dashboard'
import { LandingPage } from '../pages/LandingPage'
import { LoginPage } from '../pages/Login/LoginPage'
import { RegisterPage } from '../pages/Register/RegisterPage'


const RoutesMain = () => {

    return (
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/dashboard' element={<DashboardPage/>} />





        </Routes>

    )

}

export default RoutesMain