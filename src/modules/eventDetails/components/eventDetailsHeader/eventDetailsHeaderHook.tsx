
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Event } from '../../../../models/eventEntity';


const useEventDetails = (event?: Event) => {
    const [formattedDate, setFormattedDate] = useState<string>('');

    useEffect(() => {
        if (event?.start_date) {
            const validDate = event.start_date ?? new Date();
            setFormattedDate(moment(validDate).format('ddd. D MMM'));
        }
    }, [event]);

    return { formattedDate };
};

export default useEventDetails;
