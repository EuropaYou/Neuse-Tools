var exc = false;
var wordCount = 0;
var zort = "Rudeus was a 34-year-old NEET otaku in his previous life. It is stated by Rudeus that he was born in to a well-off family, and was the fourth child out of five children in the family. When he was in elementary school, he was actually quite a bright student, and was praised for being smart for his age. In junior high, he joined the computer club and and saved up his allowance to build his very own PC. However, he got so focused on building his PC, he neglected his studies. During his high-school years, he was a victim of severe bullying that resulted in him dropping out. For example: when he was in line to buy lunch, some person cut in front of him and he gave them a piece of his mind. However, the person who cut in front of him was an upperclassmen, and beat him up, and hung him up naked, taking pictures of him, giving him the nickname, \"Pencil Dick\". His family tried to encourage him to go back to school, but he brushed them off. There was at least one classmate whom he had a good relationship with who came by everyday to deliver homework. However, he pushed him away too when he also tried to get him to return to school."
var a = zort.length - 1;

for (let x = 0; x < zort.length; x++) {
    if (zort.charAt(x) === ' ') {
        if(!exc){
            if(zort.charAt(a) == '.'){
                wordCount++
                exc = true;
            }
        }
        wordCount++
    }
}
var slow = wordCount / 100;
var average = wordCount / 130;
var fast = wordCount / 160;

console.log("Slow: ", slow, "Average: ", average, "Fast: ", fast)