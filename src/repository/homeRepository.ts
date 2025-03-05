import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Event } from "../models/eventEntity"; 

const homeRepository = {
    fetchHomeData: async (): Promise<Event[]> => {
      try {
        const querySnapshot = await getDocs(collection(db, "event"));
        
        const data: Event[] = querySnapshot.docs.map(doc => {
          const docData = doc.data();
          
          return {
            city: docData.city || null,
            description: docData.description || null,
            end_date: docData.end_date || null,
            event_images: docData.event_images || null,
            event_list: docData.event_list || null,
            event_photo_link: docData.event_photo_link || null,
            form_url: docData.form_url || null,
            images: docData.images || null,
            name: docData.name || null,
            schedule: docData.schedule || null,
            sponsors: docData.sponsors || null,
            start_date: docData.start_date || null,
            users_accepted: docData.users_accepted || null,
            users_liked: docData.users_liked || null,
          };
        });

        return data;
      } catch (error: any) {
        throw new Error('Failed to fetch home data: ' + error.message);
      }
    },
};

export { homeRepository };
