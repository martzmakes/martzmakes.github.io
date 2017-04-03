export class BlogPost {
    public id: number;
    public title: string;
    public summary: string;
    public path: string;
    public published: Date;

    constructor(json: any, id: number) {
        this.id = id;
        this.title = json.title;
        this.summary = json.summary;
        this.published = new Date(json.published);
        this.path = json.path;
    }
}