import {useState} from 'react'; 
const SearchForm = ({searchTerm}) => {

    const [term, setTerm] = useState('');

    const searchMe = (e, value) => {
        e.preventDefault(); 
        setTerm(value);
        searchTerm(term);
    };


    return (
        <form className="search-form">
            <div className="form-control">
                <label>Search Term</label>
                <input type="text" value={term} onChange={e => searchMe(e, e.target.value)}/>
            </div>
        </form>
    )
}

export default SearchForm;