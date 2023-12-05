function grandFather() {
    var name="Phan Thanh Luc"
    console.log(name);
    function father() {
        console.log(name);
        function child() {
            console.log(name);
            var like=20
            console.log(like);
        }
        child()
    }
    father()
}

grandFather()

function introduce(name,interest) {
    console.log('Hi! I\'m '+ name +' and I like '+ interest +'.');
    console.log('The value of this is '+ this +'.')
}
introduce("Luc","song")
if (typeof window!=="undefined") {
    introduce.call(window,"Quan","Game")
}
introduce.apply("Hi",["Tho","Movie"])
