export interface User {
    name: string;
    email: string;
    company: string;
    position: string;
    password: string;
    birth_date: Date | null;
    disc: string | null;
    city: string | null;
    state: string | null;
    phone: string | null;
    linkedin: string | null;
    profile_image: string | null;
    site: string | null;
}