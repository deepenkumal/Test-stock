import express from 'express';
import mathjs, { variance } from 'mathjs';
import cov from 'compute-covariance';
const app = express();
const port = 3000;

app.get('/home', (req, res) => {
  res.send(stock());

});

const stock = ()=>{
    let firstDayADBL = {
        cur:397,
        prev:400,


    };
    let firstNepse={
        cur:2661.44,
        prev:2720.44
    };
    let thirtyDayADBL = {
        cur:416.4,
        prev:419.9


    }
    let thirtyDayNEPSE = {
        cur:2776.65,
        prev:2815.06,
    }

    let r1ADBL = (firstDayADBL.prev- firstDayADBL.cur)/firstDayADBL.prev
    let r30ADBL = (thirtyDayADBL.prev- thirtyDayADBL.cur)/thirtyDayADBL.prev
    let m1ADBL = (firstNepse.prev- firstDayADBL.cur)/firstNepse.prev
    let m30ADBL = (thirtyDayNEPSE.prev- thirtyDayNEPSE.cur)/thirtyDayNEPSE.prev


    let varience = mathjs.variance(m1ADBL,m30ADBL)

    let covarience = cov([m1ADBL,m30ADBL],[r1ADBL,r30ADBL]);
    let beta = covarience/varience;
    return beta;
}



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
