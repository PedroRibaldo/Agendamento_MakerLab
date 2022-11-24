import { Link } from "react-router-dom";
import { ArrowBack, ArrowForward, DateControl, Logout, Month, StyledLink, UpperMenu, Year, AddBooking} from './styles';
import LogoFacamp from '../../assets/facampLogo.png'
import { FiLogOut, FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { PopUp } from "../popUp/popUp";

export const NavBar = (props) => {
    return (
        <UpperMenu>
            <img src={LogoFacamp} alt="Logotipo Facamp" />
            <DateControl>
                <ArrowBack>
                    <FiChevronLeft size={"3rem"} color={"#063859"}/>
                </ArrowBack>
                <ArrowForward>
                    <FiChevronRight size={"3rem"} color={"#063859"}/>
                </ArrowForward>
                <Month>Outubro</Month>
                <Year>de 2022</Year>
            </DateControl>
            {props.isAdmin ? (
                <StyledLink to='/login'>
                    <Logout>
                        <FiLogOut size={"3rem"} color={"#063859"}/>
                    </Logout>
                </StyledLink>
            ) : (
                <AddBooking>
                    <PopUp></PopUp>
                </AddBooking>
            )}
        </UpperMenu>
    )
}