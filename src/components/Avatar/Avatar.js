import "./avatar.scss";

const Avatar = ({link, name}) => {

    const className = `component-avatar component-avatar__md`;

    return (
        <div>
            <img className={className} src={link} alt={name}/>
        </div>
    )
}

export default Avatar;