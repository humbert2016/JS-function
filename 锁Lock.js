
hasLock('handIn') //调用方法

function hasLock(lockName,lockTime){
    if(getLock(lockName)){
        return false;
    }else{
        setLock(lockName,true);
        setTimeout(function(){
            setLock(lockName,false);
        },lockTime?lockTime:LOCKTIME_DEFAULT);
        return true;
    }
}
function getLock(lockName){
    for(var i = 0 ; i < locks.length ; i ++){
        if(locks[i][0] == lockName){
            return locks[i][1];
        }
    }
    locks[locks.length] = [lockName,false];
    return false;
}

function setLock(lockName,lockValue){
    for(var i = 0 ; i < locks.length ; i ++){
        if(locks[i][0] == lockName){
            locks[i][1] = lockValue;
            return ;
        }
    }
    locks[locks.length] = [lockName,lockValue];
}