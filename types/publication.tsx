export type Publication = {
    id: number;
    type: 'book' | 'chapter' | 'assignment' | string; // adjust as needed
    title: string;
    author?: string;
    summary?: string;
    created_at: Date;
    updated_at: Date;
};