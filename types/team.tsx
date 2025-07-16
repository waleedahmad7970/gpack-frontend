
export type Fields = {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    pivot: any;
}

export type TeamMember = {
    id: number;
    prefix: string;
    member_type: 'core' | 'fellow' | string; // adjust as needed
    name: string;
    designation: string;
    expertise?: string;
    photo_url?: string;
    profile_url?: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    fields: Fields[];
};
