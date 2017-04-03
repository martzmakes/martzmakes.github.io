export class BlogPost {
    public title: string;
    public body: string;

    constructor(json: any) {
        this.title = json.title;
        this.body = json.body;
    }
}