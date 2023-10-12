
export const KnightRule = (newX,newY,[oldX,oldY]) => {
    console.log("newX: " + newX + ", newY: " + newY + "\noldX: "+oldX + ", oldY: "+oldY);
    
    if (Math.abs(newX - oldX) == 2 && Math.abs(newY - oldY) == 1) {
        return true;
    }
    else if (Math.abs(newX - oldX) == 1 && Math.abs(newY - oldY) == 2) {
        return true;
    }
    else {
        return false;
    }
}
