import { Navigation } from '../components/general/navbar/Navigation.tsx'
import '../assets/background.css'
import { Banner } from '../components/mainPage/ft_page/Banner.tsx'
import { CreatedWith } from '../components/mainPage/created_with/CreatedWith.tsx'
import { About } from '../components/mainPage/about_project/About.tsx'
import { Capability } from '../components/mainPage/about_project/Capability.tsx'
import { Footer } from '../components/general/footer/Footer.tsx'
import { Contacts } from '../components/mainPage/contacts/Contacts.tsx'
import {CookiePolicyModal} from '../components/modal/CookieModal.tsx'

const MainPage = () => {
    return(
        <div className='pt-5'>
            <div className='background bg-white dark:bg-[#14151B]'>
                <span className='-z-1'></span>
                <span className='-z-1'></span>
                <span className='-z-1'></span>
                <span className='-z-1'></span>
                <span className='-z-1'></span>
                <span className='-z-1'></span>
            </div>
            <Navigation></Navigation>
            <Banner></Banner>
            <CreatedWith></CreatedWith>
            <About></About>
            <Capability></Capability>
            <Contacts></Contacts>
            <Footer></Footer>
            <CookiePolicyModal></CookiePolicyModal>
        </div>
    )
}

export default MainPage