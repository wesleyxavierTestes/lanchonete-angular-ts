import sglanchoneteApp from "../app";

sglanchoneteApp.filter('customdate',  () => {
    return  (v: any) => {
        let now = new Date(v);
            var now_utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
            return new Date(now_utc).toLocaleDateString() + " " +  new Date(now_utc).toLocaleTimeString();
    }
})