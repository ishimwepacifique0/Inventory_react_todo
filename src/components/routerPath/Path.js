import {FaTh,
    FaUserAlt,
    FaCommentAlt,
    FaPager,
    FaHome,
    FaShoppingBag,
    FaPagelines,
    FaInbox,
    FaThList,
 } from 'react-icons/fa'
export const path = [
    {
        path:'/dashboard',
        name:'Dashboard',
        icon:<FaHome/>
    },
    {
        path:'/invoice',
        name:'Invoice',
        icon:<FaPager />
    },
    {
        path:'/items',
        name:'Items',
        icon:<FaShoppingBag/>
    },

    {
        path:'/customers',
        name:'Customers',
        icon:<FaUserAlt />
    },
    {
        path:'/reports',
        name:'Report',
        icon:<FaInbox />
    },
    {
        path:'/settings',
        name:'Settings',
        icon:<FaThList/>
    }
]