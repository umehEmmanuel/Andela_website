import { createBrowserRouter } from 'react-router-dom'
import Layout from '../Components/Block/Layout'
import Home from '../Components/Statics/Home'
import Technology from '../Components/Statics/Technology'
import Enterpise from '../Components/Statics/Enterpise'
import Business from '../Components/Statics/Business'

const Router = createBrowserRouter([{
path:"/" ,
element:<Layout/>,
children:[
    {
    index :true,
    element:<Home/>
},
{
    index :true,
    path:"/technology" ,
    element:<Technology/>
},
{
    index :true,
    path:"/enterprise" ,
    element:<Enterpise/>
},
{
    index :true,
    path:"/Business" ,
    element:<Business/>
}
]
}])
export default Router
