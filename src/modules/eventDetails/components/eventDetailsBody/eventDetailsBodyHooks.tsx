import moment from 'moment';
import { Event } from '../../../../models/eventEntity';

const useEventDetailsBody = (event?: Event) => {

    const data = [
        { id: '1', name: "Marcelo Donato", photo: "" },
        { id: '2', name: "João Silva", photo: "" },
        { id: '3', name: "Maria Oliveira", photo: "" },

    ];

    const formatEventDate = (date?: string | Date) => {
        const validDate = date ?? new Date();
        return moment(validDate).format("DD/MM/YYYY");
    };
    const onPress = () => {
        console.log("Cliquei no botão de interesse");
    };

    return { data, formatEventDate, onPress };
};


export default useEventDetailsBody;