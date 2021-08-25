export default function Panel({
    filterActive, setFilterActive,
    sortFieldName, setSortFieldName }) {

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
            <select id="sortBy" onChange={(ev) => setSortFieldName(ev.target.value)}>
                <option value="id" className={sortFieldName === "id" ? "selected" : ""}>Default</option>
                <option value="email" className={sortFieldName === "email" ? "selected" : ""}>Email</option>
                <option value="balance" className={sortFieldName === "balance" ? "selected" : ""}>Balance</option>
            </select>

            <span className="checkbox checkbox--active"></span>
            <label htmlFor="sortOrder">ascending</label>
        </div>
    </div>
}
