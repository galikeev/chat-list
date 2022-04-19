import { IconDialog } from '../../assets';
import './header.scss';

const Header = ({header}) => {
    return (
        <div className="header">
            <img src={IconDialog} alt="icon dialog" />
            <h3>{header ? header : 'Dialog name'}</h3>
        </div>
    );
};

export default Header;