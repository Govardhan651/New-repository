export class Access{

    public loadurl(){
        console.log("load url");
    }

    private loadusername(){
        console.log("load username");
    }

    protected loadpassword(){
        console.log("load password");
    }

    public getinfo(){
        this.loadusername();
        this.loadpassword();
    }
}

let access= new Access();
access.loadurl()
access.getinfo()