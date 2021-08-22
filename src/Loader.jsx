import './styles/loader.css';

function Loader({ visible = false }) {
    const hiddenClassName = visible ? '' : 'nodisplay'
    return (<>
        <div className={`overlay ${hiddenClassName}`}></div>
        <div className={`lds-ring ${hiddenClassName}`}>
            <div></div>
        </div>
    </>)
}

export default Loader;
