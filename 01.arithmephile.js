function arithmephile(data) {
    "use strict";

    let best = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < data.length; i++) {
        if (Number(data[i]) >= 0 &&
            Number(data[i]) < 10 &&
            (data.length - i) < data.length) {
            let current = 1;
            let to = i + Number(data[i]);
            for (let j = i + 1; j <= to; j++) {
                current *= data[j];
            }

            if (current > best) {
                best = current;
            }
        }
    }

    console.log(best);
}

arithmephile(["10","20","2","30","44","123","3","56","20","24"]);
arithmephile(["100","200","2","3","2","3","2","1","1"]);