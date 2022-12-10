import Styles from './style.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { RiHomeSmile2Line, RiHomeSmile2Fill, RiSearchEyeFill } from 'react-icons/ri'
import { BiSearchAlt, BiLogOut } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { RiUser5Line, RiUser5Fill } from 'react-icons/ri'
import Link from 'next/link'


const BottomNav = props => {
    const router = useRouter()
    const [activeTabs, setActiveTabs] = useState(props.name)
    // useEffect(() => {
    //     switch (activeTabs) {
    //         case 'home':
    //             // Router.push('/home');
                
    //             break;
    //         case 'search':
    //             // Router.push('/search');
                
    //             break;
    //         case 'saved':
    //             // Router.push('/home');
    //             break;
    //         case 'account':
    //             // Router.push('/home');
    //             break;
    //         default:
                
    //             break;
    //     }
    // }, [activeTabs, router])

    return (
        
        <div className={`${Styles.bottomNav}`}>
            <Link href="/home">
            <div className={`${Styles.bnTab}`}>
                {activeTabs === 'home' ?
                    <RiHomeSmile2Fill
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <RiHomeSmile2Line
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('home')}
                    />}
            </div>
            </Link>

            <Link href='/search'>
            <div className={`${Styles.bnTab}`}>
                {activeTabs === 'search' ?
                    <RiSearchEyeFill
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('search')}
                    /> :
                    <BiSearchAlt
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('search')}
                    />}
            </div>
            </Link>


            <Link href='/profile'>
            <div className={`${Styles.bnTab}`}>
                {activeTabs === 'account' ?
                    <RiUser5Fill
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('account')}
                    /> :
                    <RiUser5Line
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('account')}
                    />}
            </div>
            </Link>

            <Link href='/'>
            <div className={`${Styles.bnTab}`}>
                {activeTabs === 'logout' ?
                    <AiFillHeart
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('logout')}
                    /> :
                    <BiLogOut
                        size='35'
                        color='#fff'
                        onClick={() => setActiveTabs('logout')}
                    />}
            </div>
            </Link>

            
        </div>
    )
}

export default BottomNav