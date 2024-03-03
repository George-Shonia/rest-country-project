import classes from '../modules/Search.module.scss'

const Search = () => {
  return (
    <div className={classes['search-wrapper']}>
        <input type="text" placeholder='Search for a country...'/>
    </div>
  )
}

export default Search