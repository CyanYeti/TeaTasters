import { useSelector, shallowEqual } from 'react-redux'
import { useEffect, useState } from 'react';

const Tasting = () => {
    const { name, region, cultivar, age, tastingNotes, additionalNotes, rating } = useSelector(state => state.tastingNotesReducer, shallowEqual);

    const [data, setData] = useState();

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="page">
            <div className="page-header">
                <label>Tasting Note:</label>
            </div>
            <div className="page-body">
                <div>
                    {!data ? "Loading data..." : data}
                </div>                
                <div className="entry-read">
                    <label htmlFor="name">Name:</label>
                    <span id="name">{name}</span>
                </div>
                <div className="entry-read">
                    <label htmlFor="region">Region:</label>
                    <span id="region">{region}</span>
                </div>
                <div className="entry-read">
                    <label htmlFor="cultivar">Cultivar:</label>
                    <span id="cultivar">{cultivar}</span>
                </div>
                <div className="entry-read">
                    <label htmlFor="age">Age:</label>
                    <span id="age"> {age}</span>
                </div>
                <div className="entry-read">
                    <label htmlFor="tastingNotes">Tasting Notes:</label>
                    <span id="tastingNotes">{tastingNotes}</span>
                </div>
                <div className="entry-read">
                    <label htmlFor="additionalNotes">Additional Notes:</label>
                    <span id="additionalNotes">{additionalNotes}</span>
                </div>
                <div className="entry-read">
                    <label htmlFor="rating">Rating:</label>
                    <span id="rating"> {rating}</span>
                </div>
            </div>
        </div>
    );
}

export default Tasting;