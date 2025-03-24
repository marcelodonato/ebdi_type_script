export interface Event {
    city: string | null;
    description: string  | null;
    end_date: Date  | null;
    event_images: { image: string }[]  | null;
    event_list: { event: string }[]  | null;
    event_photo_link: string  | null;
    form_url: string  | null;
    images: { image: string }[]  | null;
    name: string  | null;
    schedule: string  | null;
    sponsors: { sponsor: string }[]  | null;
    start_date: Date  | null;
    users_accepted: { user: string }[]  | null;
    users_liked: { user_liked: string }[]  | null;
}
