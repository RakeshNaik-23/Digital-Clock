function clock()
        {
            let date=new Date();
            let h=date.getHours();

            let am_pm="AM"

            let h1=(h<10)?("0"+h):h;
            let h2=(h1>12)?(h1-12):h1;
            let am_pm1=(h2<=12)?("PM"):"AM";
            let m=date.getMinutes();
            let m1=(m<10)?("0"+m):m;
            let s=date.getSeconds();
            let s1=(s<10)?("0"+s):s;

            let day=date.getDay();
            let arrDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            let month=date.getMonth();
            let arrMonth=["January","February","March","April","May","June","July","August","September","October","November","December"];
            let d=date.getDate();
            let year=date.getFullYear();

            document.getElementById("time").innerHTML=`${h2}:${m1} ${am_pm1}`
            document.getElementById("sec").innerHTML=`${s1}`
            document.getElementById("date").innerHTML=`${d} / ${arrMonth[month]} / ${year}`
            document.getElementById("day").innerHTML=`${arrDay[day]}`
        }
        clock()

        setInterval(() =>{
            clock()
        },1000);