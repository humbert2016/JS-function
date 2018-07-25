function checkCookie()
  {
    console.log('xxxxxxxxxxxxxxxxxxx')
    token=getCookie('token') //设置cookie对应的名字
      if(token!='') //判断cookie是否为空
      {
        console.log('111---'+token);
        pObj.token=token;       //把cookie里的token  赋值到页面的url去
        console.log('222---'+pObj.token)
      }
      else 
        {
          if(pObj.token!=''&&pObj.token!=null) //判断当前的url的token是否为空 和 为  null
            {
              console.log('55555555555555')
              setCookie('token',pObj.token,15)  //把url 里的token赋值到cookie里
            }    
        }
  }

function getCookie(c_name)
  {
    if (document.cookie.length>0)
      {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1){ 
            c_start=c_start + c_name.length+1 
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
          } 
      }
    return ""
  }

function setCookie(c_name,value,expiredays)
  {
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
  }