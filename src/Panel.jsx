export default function Panel({ filterActive, setFilterActive }) {

    return <div className="panel">
        <div className="panel-filter">
            <span id="filterActive" className={
                `checkbox ${filterActive ? 'checkbox--active' : ''}`
            }></span>
            <label htmlFor="filterActive"
                   onClick={() => {setFilterActive(!filterActive)}}
            >choose active</label>
        </div>

        <div className="panel-sort">
            <label htmlFor="sortBy">sort by</label>
            <select id="sortBy">
                <option value="default" className="selected">Default</option>
                <option value="email">Email</option>
                <option value="balance">Balance</option>
            </select>

            <span className="checkbox checkbox--active"></span>
            <label htmlFor="sortOrder">ascending</label>
        </div>
    </div>
}
