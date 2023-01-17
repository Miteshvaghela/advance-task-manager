import Button from './Button';

const Header = ({title, showAddForm, showForm}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button title={showForm?'Close':'Add'} color={showForm?'darkred':'darkblue'} showAddForm={showAddForm} />
        </header>
    )
}
export default Header;