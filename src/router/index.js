import Test from '../components/views/Test';
import Inventory from '../components/views/Inventory'
import ItemDetails from '../components/views/ItemDetails'
export const routes=[
  {
  path:'/',
  component:Inventory
  },
  {
    path:'/test/:id',
    component:Test
  },
  {
    path:'/item/:id',
    component:ItemDetails
  }
]
