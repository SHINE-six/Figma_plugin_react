
export const AnnouncementRule = (x,y) => {
    let Ruled_x = x;
    let Ruled_y = 8-y;
    
    switch (x) {
        case 0:
            Ruled_x = "A";
            break;
        case 1:
            Ruled_x = "B";
            break;
        case 2:
            Ruled_x = "C";
            break;
        case 3:
            Ruled_x = "D";
            break;
        case 4:
            Ruled_x = "E";
            break;
        case 5:
            Ruled_x = "F";
            break;
        case 6:
            Ruled_x = "G";
            break;
        case 7:
            Ruled_x = "H";
            break;
        default:
            break;
    }

    return Ruled_x + '' + Ruled_y;

}
