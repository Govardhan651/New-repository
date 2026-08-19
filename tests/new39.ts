abstract class wrapper {

    abstract lanunchbrowser(): void;

    loadUrl(): void {
        console.log("loading URL");
    }

    abstract logininfo(): void;
}

class TestCase extends wrapper {

    lanunchbrowser(): void {
        console.log("launch browser");
    }

    logininfo(): void {
        console.log("login info");
    }
}

let t1 = new TestCase()
t1.lanunchbrowser()
t1.loadUrl()
t1.logininfo()
