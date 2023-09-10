import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const API = 'http://20.244.56.144/train/trains';

function TrainDetails() {
    const [trainData, setTrainData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTrainDetails() {
            try {
                const response = await Axios.get(API);
                setTrainData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching train details:', error);
            }
        }

        fetchTrainDetails();
    }, []);

    return ( <
        div >
        <
        h1 > Train Details < /h1> {
            loading ? ( <
                p > Loading train details... < /p>
            ) : ( <
                table >
                <
                thead >
                <
                tr >
                <
                th > Train Name < /th> <
                th > Departure Time < /th> <
                th > Arrival Time < /th> <
                th > Departure Station < /th> <
                th > Arrival Station < /th> <
                /tr> <
                /thead> <
                tbody > {
                    trainData.map((train, index) => ( <
                        tr key = { index } >
                        <
                        td > { train.trainName } < /td> <
                        td > { train.departureTime } < /td> <
                        td > { train.arrivalTime } < /td> <
                        td > { train.departureStation } < /td> <
                        td > { train.arrivalStation } < /td> <
                        /tr>
                    ))
                } <
                /tbody> <
                /table>
            )
        } <
        /div>
    );
}

export default TrainDetails;