import { useSelector, shallowEqual } from 'react-redux'

const Tasting = () => {
    const { age } = useSelector(state => state.tastingNotesReducer, shallowEqual);
    return (
        <div className="page">
            <div className="page-header">

            </div>
            <div className="page-body">
                
            </div>
        </div>
    );
}

export default Tasting;