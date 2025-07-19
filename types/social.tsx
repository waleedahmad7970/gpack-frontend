
export type SocialMedia = {
    id: number;
    platform: string;
    url?: string;
    icon?: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

export type SocialMediaItem = {
    id: number;
    platform: 'facebook' | 'twitter' | 'linkedin' | 'youtube' | 'instagram';
    url?: string;
    icon?: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
};