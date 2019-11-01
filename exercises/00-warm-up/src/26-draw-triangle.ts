export {};

function draw(num: number) {
    let star: string;
    for (let i = 1; i <= num; i++) {
        star = '';
        for (let j = 1; j <= i; j++) {
            star = star.concat('*');
        }
        console.log(star);
    }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
