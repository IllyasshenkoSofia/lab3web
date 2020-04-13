window.addEventListener('load', function () {

    let year = +prompt("Вкажіть свій вік ");
    let education = +prompt("Оберіть яка в вас освіта:натисніть 1 - медична освіта;	2 - юридична; 3 - кулінарна; 4 - педагогічна; 5 - економічна; 6 - жодна з цих не підходить; 7 - не маєте жодної");
    let gender = +prompt("Ви чоловік(напишіть 1) чи жінка(напишіть 2)?");
    

    let children = [0, 1, 2, 3];
    let job = ["лікар", "юрист", "кухар", "педагог", "економіст", "про яку ви мріяли", "яка буде для вас несподіваною"];
    let partner_man = ["Віталій", "Влад", "Іван", "Андрій", "Станіслав"];
    let partner_woman = ["Катерина", "Аліна", "Світлана", "Вікторія", "Анна"];
    let country = ["Австрія", "Чехія", "Франція", "Германія", "Греція"];

    var part1,
        part2,
        part3,
        part4;

    if (year > 0 && year < 20) {
        part1 = children[3];
    } else if (year > 21 && year < 30) {
        part1 = children[2];
    } else if (year > 31 && year < 40) {
        part1 = children[1];
    } else {
        part1 = children[0];
    }

    switch (education) {
        case 1:
            part2 = job[1];
            break;
        case 2:
            part2 = job[2];
            break;
        case 3:
            part2 = job[3];
            break;
        case 4:
            part2 = job[4];
            break;
		case 5:
            part2 = job[5];
            break;
		case 6:
            part2 = job[6];
            break;	
	    case 7:
            part2 = job[7];
            break;
      
    }

    if (year > 0 && year < 20) {
        part4 = country[3];
        switch (gender) {
            case 1:
                part3 = partner_woman[3];
                break;
            case 2:
                part3 = partner_man[3];
                break;
            default: 
                part3="загадкова персона";
                break;    
        }
    } else if (year > 21 && year < 30) {
        part4 = country[4];
        switch (gender) {
            case 1:
                part3 = partner_woman[4];
                break;
            case 2:
                part3 = partner_man[4];
                break;
            default: 
                part3="загадкова персона";
                break;    
        }
    } else if (year > 31 && year < 50) {
        part4 = country[2];
        switch (gender) {
            case 1:
                part3 = partner_woman[2];
                break;
            case 2:
                part3 = partner_man[2];
                break;
            default: 
                part3="загадкова персона";
                break;    
        }
    } else if (year > 51 && year < 90) {
        part4 = country[1];
        switch (gender) {
            case 1:
                part3 = partner_woman[1];
                break;
            case 2:
                part3 = partner_man[1];
                break;
            default: 
                part3="загадкова персона";
                break;    
        }
    } else {
        part4 = country[0];
        switch (gender) {
            case 1:
                part3 = partner_woman[0];
                break;
            case 2:
                part3 = partner_man[0];
                break;
            default: 
                part3="загадкова персона";
                break;    
        }
    }


    alert("Ви укладете шлюб з "+part3+" та у вас буде "+part1+" дітей. "+"Ви переїдете до країни - "
    +part4+" на посаду "+part2+".");
})