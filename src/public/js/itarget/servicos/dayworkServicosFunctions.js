function difDate(d1, d2)
{
let atraso = false
if(d2 > d1)
atraso = true
	
let delta = Math.abs(d1 - d2) / 1000;
var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();

	
const days = Math.floor(delta / 86400);
delta -= days * 86400;
const hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;
const minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;
const seconds = delta % 60
console.log(months, days, hours, minutes, seconds, atraso)

if(months > 0)
return {dif: months, ref:'Meses', atraso}

if(days > 0)
return {dif: days, ref:'Dias', atraso}

if(hours > 0)
return {dif: hours +'h'+ minutes, ref:'Horas', atraso}

if(minutes > 0)
return {dif: minutes, ref:'Minutos', atraso}

if(seconds > 0)
return {dif: seconds, ref:'Segundos', atraso}

return {dif: '-', ref:'Sem Data', atraso}
}