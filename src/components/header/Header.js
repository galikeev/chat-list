import './header.scss';

const Header = ({header}) => {
    return (
        <div className="header">
            <h3>{header ? header : 'Диалог'}</h3>
        </div>
    );
};

export default Header;